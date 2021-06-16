import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/Authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;
  ErrorText = "";
  MessageObj = {TextMessage:"wait...."};

  constructor(public formBuilder: FormBuilder,public navCtrl: NavController, private authService: AuthenticationService) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
     
    });

    


  } 

  

  get errorControl() {
    return this.ionicForm.controls;
  }

  loginUser(){
    
  }

  submitForm() {
   
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
     // this.ErrorText = "Patientez ..";
     this.authService.login( this.ionicForm.value.name , this.ionicForm.value.password);
    
      

    }
  }

}
