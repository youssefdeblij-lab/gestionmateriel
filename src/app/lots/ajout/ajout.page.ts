import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {ExchangedataService} from "../../services/exchangedata.service";
import {environment} from "../../../environments/environment";
import { ActivatedRoute,Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
})
export class AjoutPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  imNotIn = false;
  public anArray:any=[{'idMat':'','qte':''}];
  id:any;
  params:any;
  chantierResp:any=[];
  allCantier:any=[];
  matos:any=[];

  
   data:string ; 

  constructor(public formBuilder: FormBuilder,public exchangedata : ExchangedataService,  private router: Router, private route: ActivatedRoute,public loadingController: LoadingController,public alertController: AlertController ) { 
    this.params = this.route.params.subscribe(params => {
    this.id = params['id'];  });
  }

  ngOnInit() {
    this.getChantiersResponsable(this.id);
    this.getAllchantier();
    this.ionicForm = this.formBuilder.group({
    
      depuis: ['', [Validators.required]],
      vers: ['', [Validators.required]],
   
    });
  }

  
  get errorControl() {
    return this.ionicForm.controls;
  }

  addmateriel(){

  }

  async submitForm() {

    let ObjPost:any = {
      "idChantierVers" :  this.ionicForm.value.vers,
      "idChantierDepuis" :   this.ionicForm.value.depuis,
      "materiel" : this.anArray 
    };

    
 

    if (!this.ionicForm.valid) {
      this.presentAlert('Please provide all the required values!');
      return false;
    } else{
      if(this.controleArray()){
        if(this.controleqte()){
              this.sendPostRequest(ObjPost, environment.APiHotst + "/lots/new");
        }else{
          this.presentAlert('Merci de contrôler les quantités!');
          return false;
        }  
      }else {
        this.presentAlert('Please provide all the required values!');
        return false;
      }
      
    }
    
    
  }

    Add(){
      this.anArray.push({'idMat':'','qte':''});
      console.log(this.anArray);
      }

    getChantiersResponsable(id:any){

        fetch(environment.APiHotst + '/chantiers/getByResponsble/' + id)
          .then(response => {
              
            response.json()
                .then(data => {
                  this.chantierResp = data;
            })
            
        }, (err) => {
          console.log("Err : " + JSON.stringify( err));
        });
 

    }
    
    getAllchantier(){
      fetch(environment.APiHotst + '/chantiers/')
      .then(response => {
          
        response.json()
            .then(data => {
              this.allCantier = data;
              console.log( this.allCantier);
              

        })
        
    }, (err) => {
      console.log("Err : " + JSON.stringify( err));
    });


    }


    onChange($event){
      //console.log($event.target.value);
      let idChantier:any = $event.target.value ;
      fetch(environment.APiHotst + '/materiel/affected/getByChantier/' + idChantier)
      .then(response => {
          
        response.json()
            .then(data => {
                data.forEach(element => {
                  //console.log(element);
                  if(element.getQte !==  "0" ){
                    this.matos.push(element);
                  }
              });
              //this.matos = data;
        })
        
    }, (err) => {
      console.log("Err : " + JSON.stringify( err));
    });
    }


    async sendPostRequest(ObjPost,whereToPost) {
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'chargement...',
         
      });
   
      

      loading.present();

    
  
      
       

 
      const options = {
        method: 'POST',
        body: JSON.stringify(ObjPost)
        };
    
    
    
      fetch(whereToPost, options)
      .then(response => {
          
        response.json()
            .then(data => {
              console.log( data.Status) ; 
              loading.dismiss();
              this.presentAlert('la demande a ete ajoute.');
             
              this.router.navigate(['dashboard']);
              
    
         })
        
        }, (err) => {
          console.log("Err : " + JSON.stringify( err));
          this.presentAlert("Err : " + JSON.stringify( err));
          loading.dismiss();
            
        });
     
      
    }

    controleArray():boolean{
      let wahrheit:boolean=true;
      this.anArray.forEach(element => {
         if(element.idMat === "" || element.qte ==="" )  wahrheit = false;
        
      });
      
      return wahrheit;
    }

    controleqte():boolean{
      let wahrheit:boolean=true;
      this.anArray.forEach(element => {
        let qte = element.qte;
        let idMat = element.idMat;
        this.matos.forEach(mat => { 
          if(mat.Idmat == idMat){
            console.log(mat);
            if(mat.getQte < qte) wahrheit=false;
          }
        });
        
       
     });

     return wahrheit;

    }

    deletindex(index){
      this.anArray.splice(index,1);
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
