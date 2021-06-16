import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {ExchangedataService} from "../../services/exchangedata.service";
import {environment} from "../../../environments/environment";
import { AuthenticationService } from 'src/app/services/Authentication.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande-materiel',
  templateUrl: './demande-materiel.page.html',
  styleUrls: ['./demande-materiel.page.scss'],
})
export class DemandeMaterielPage implements OnInit {
  
  ionicForm: FormGroup;
  isSubmitted = false;
  imNotIn = false;
  id:any;
  
   data:any = [] ;
   chantiers:any = [] ;
   demandeur:any  ;
   
  constructor(public formBuilder: FormBuilder, private authService: AuthenticationService,public loadingController: LoadingController,public alertController: AlertController,  private router: Router ) { 
    
   }

  ngOnInit() {

    this.ionicForm = this.formBuilder.group({
    
      materiel: ['', [Validators.required]],
      chantier: ['', [Validators.required]],
      qte: ['', [Validators.required]],
   
    });
   
   
    this.authService.storage.get('USER_INFO').then((val) => {
    
      this.id = val.id;
      this.demandeur = val.User;
     
  
      fetch(environment.APiHotst + '/materiels/tous/all')
      .then(response => {
          
          response.json()
              .then(data => {
                  console.log(data);
                  this.data = data;
                  this.getChantiersResponsable(this.id);
          
                 
              });
          
      });
      
    });

   
   

    
    
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  async submitForm() {
   
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value);
      let Objdata:any = {
        chantier : this.ionicForm.value.chantier ,
        materiel : this.ionicForm.value.materiel ,
        qte : this.ionicForm.value.qte,
        status : "Encours" ,
        demandeur : this.demandeur ,
         
      };

      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'chargement...',
         
      });
   
      

      loading.present();



      const options = {
        method: 'POST',
        body: JSON.stringify(Objdata)
        };
    
    
    
      fetch(environment.APiHotst +  "/demandes/new" , options)
        .then(response => {
            
          response.json()
              .then(data => {
                console.log( data.Status) ; 
                loading.dismiss();
                this.ngOnInit();
                this.presentAlert(' Opération effectué');
                this.router.navigate(['dashboard']);

                

          })
          
          }, (err) => {
            console.log("Err : " + JSON.stringify( err));
            this.presentAlert("Err : " + JSON.stringify( err));
            loading.dismiss();
            
        });

      console.log(Objdata);

    }
  }

  getChantiersResponsable(id:any){

    fetch(environment.APiHotst + '/chantiers/getByResponsble/' + id)
      .then(response => {
          
        response.json()
            .then(data => {
              this.chantiers = data;
        })
        
    }, (err) => {
      console.log("Err : " + JSON.stringify( err));
    });


}

async presentAlert(msg) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'information',
    message: msg,
    buttons: ['OK']
  });

  await alert.present();
}


 

}
