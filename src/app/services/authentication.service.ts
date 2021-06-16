import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import {   Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Md5 } from '../../../node_modules/ts-md5/dist/md5';
import { AlertController, LoadingController } from '@ionic/angular';


 
 
@Injectable()
export class AuthenticationService {
 
  authState = new BehaviorSubject(false);
 
  constructor(
    private router: Router,
    public storage: Storage,
    public  platform: Platform,
  
    public loadingController: LoadingController,
    public alertController: AlertController 
      ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
 
  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }
 
 
  async login(user : string,pass : string) {
   
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'chargement...',
       
    });
 
    

    loading.present();

   
    
    const md5 = new Md5();
    let resp = false;
    const md5_pass = md5.appendStr(pass).end();
    const userObjPost =[{Id: 74524,Nom: user,Email: '@',Password:md5_pass,Role : '--'}];
    const options = {
      method: 'POST',
      body: JSON.stringify(userObjPost)
  };



    fetch(environment.APiHotst + '/users/checkpass', options)
    .then(response => {
        
      response.json()
          .then(data => {
             console.log(data);
            
             
             if(  data.Response == "true" ){
              this.storage.set('USER_INFO', data).then((response) => {
                loading.dismiss();
                this.router.navigate(['dashboard']);
                this.authState.next(true);
              });
             
            }else{
              this.presentAlert("Login / password incorrect");
              loading.dismiss();
            }

          })
      
  });
    
     
 
  }
 
  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
      this.presentAlert("Déconnecté");
    });
  }
 
  isAuthenticated() {
    return this.authState.value;
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
