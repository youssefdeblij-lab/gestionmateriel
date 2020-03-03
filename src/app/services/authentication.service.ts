import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Md5 } from '../../../node_modules/ts-md5/dist/md5';

 
 
@Injectable()
export class AuthenticationService {
 
  authState = new BehaviorSubject(false);
 
  constructor(
    private router: Router,
    public storage: Storage,
    public  platform: Platform,
    private toastCtrl: ToastController
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
 
 
  login(user : string,pass : string) {
   
    
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
                this.router.navigate(['dashboard']);
                this.authState.next(true);
              });
             
            }else{
              this.presentToast();
            }

          });
      
  });
    
     
 
  }
 
  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }
 
  isAuthenticated() {
    return this.authState.value;
  }
 
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Login / password incorrect',
      duration: 2000
    });
    toast.present();
  }
 
}
