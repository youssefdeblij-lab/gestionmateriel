import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mondemandelotuniq',
  templateUrl: './mondemandelotuniq.page.html',
  styleUrls: ['./mondemandelotuniq.page.scss'],
})
export class MondemandelotuniqPage implements OnInit {
  id:any;
  params:any;
  isempty: boolean = false;
  materiels: any = []; 
  info:any;
  
  constructor(  private route: ActivatedRoute, public loadingController: LoadingController,public alertController: AlertController) { 
    this.params = this.route.params.subscribe(params => {
      this.id = params['id'];  });
  }

  ngOnInit() {
    this.isempty = false;
    this.materiels = [];
    this.info= [];

    fetch(environment.APiHotst +  "/lots/Getbyid/" + this.id)
                .then(response => {
                  response.json()
                  .then(data => {
                     this.info = data;
                      this.isempty = true;
                      this.materiels = data.materiels ;

                    console.log(this.materiels);
                    console.log(this.info);
                  })})


  }

  entscheidung(was,obj){

    if(was === "annulé"){
      this.editMatlot(obj.id,was)
    }else{
     
      let objPost = {
        "idmat" : obj.idMat ,
        "idChantier" : this.info.idChantierdepuis,
        "reference" :obj.ref ,
        "idChantierVers" :this.info.idChantiervers ,
        "qte_demander" : obj.qte
        
      };
      this.editqte(objPost);
      this.editMatlot(obj.id,was);

      //console.log(obj);

    }
    

  }

  async editMatlot(id,status){

      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'chargement...',
        
      });
  
      

      loading.present();

      let ObjPost:any = {
        "id" : id,
        "Status" :  status
      }; 
    
      const options = {
        method: 'POST',
        body: JSON.stringify(ObjPost)
        };
    
    
    
      fetch(environment.APiHotst +  "/lots/editMatlot" , options)
        .then(response => {
            
          response.json()
              .then(data => {
                console.log( data.Status) ; 
                loading.dismiss();
                this.ngOnInit();
                this.presentAlert(' statut est changé');
                

          })
          
          }, (err) => {
            console.log("Err : " + JSON.stringify( err));
            this.presentAlert("Err : " + JSON.stringify( err));
            loading.dismiss();
            
        });


  }

  async editqte(ObjPost){

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'chargement...',
      
    });

    

    loading.present();

    
  
    const options = {
      method: 'POST',
      body: JSON.stringify(ObjPost)
      };
  
  
  
    fetch(environment.APiHotst +  "/materiel/affected/editAffected" , options)
      .then(response => {
          
        response.json()
            .then(data => {
              console.log( data.Status) ; 
              loading.dismiss();
              //this.ngOnInit();
              this.presentAlert(' opération  a ete effuctue');
              

        })
        
        }, (err) => {
          console.log("Err : " + JSON.stringify( err));
          this.presentAlert("Err : " + JSON.stringify( err));
          loading.dismiss();
          
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

  malen(statut){
    let farbe = "primary";
    switch(statut){
      case"validé":farbe = "success" ; break;
      case"annulé": farbe = "danger"; break;
    }
    return farbe;

  }

}
