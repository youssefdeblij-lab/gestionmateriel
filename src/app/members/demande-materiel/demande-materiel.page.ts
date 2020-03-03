import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {ExchangedataService} from "../../services/exchangedata.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-demande-materiel',
  templateUrl: './demande-materiel.page.html',
  styleUrls: ['./demande-materiel.page.scss'],
})
export class DemandeMaterielPage implements OnInit {
  
  ionicForm: FormGroup;
  isSubmitted = false;
  imNotIn = false;
  
   data:string ;
  constructor(public formBuilder: FormBuilder,public exchangedata : ExchangedataService) {  }

  ngOnInit() {
    
    this.ionicForm = this.formBuilder.group({
   
      materiel: ['', [Validators.required]],
      chantier: ['', [Validators.required]],
   
    });
   

    fetch(environment.APiHotst + '/materiels/tous/all')
    .then(response => {
        
        response.json()
            .then(data => {
               // console.log(data);
                this.data = data;
            });
        
    });
   

    
    
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
   
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value);
     // this.data = this.exchangedata.req();
      //this.exchangedata.getmaterielAll();
      //let  resp: boolean = this.authService.login( this.ionicForm.value.name , this.ionicForm.value.password);
    
      /*if(resp ){
        console.log("ok i'm in");
       // AuthGuardService.canActivate(true);
       // this.navCtrl.navigateRoot("/dashboard");
       
      }else{
        this.imNotIn = true;
      }*/

    }
  }


 

}
