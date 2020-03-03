import { Component, OnInit } from '@angular/core';
 import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {ExchangedataService} from "../../services/exchangedata.service";
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-transfert-materiel',
  templateUrl: './transfert-materiel.page.html',
  styleUrls: ['./transfert-materiel.page.scss'],
})
export class TransfertMaterielPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  imNotIn = false;
  data:any ;
  chantier:any;
  params:any;
  id:any;
  materiel:any = { "Idmat" : "chanrgement ....",
  "Reference" : "",
  "Designation" : "",
  "IdChantier" : "",
  "dateAffectation" : "",
  "getQte" : ""} ;
  allchantier:any;
  checkqte:boolean = false;
  

  constructor(public formBuilder: FormBuilder,public exchangedata : ExchangedataService,private route: ActivatedRoute) {
    this.params = this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.chantier = params['nameChantier']; });
   }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
   
      materiel: [''],
      chantierinput: [''],
      Vers: [''],
      qte: ['', [Validators.required]],
   
    });
    fetch(environment.APiHotst + '/materiel/affected/getdetails/' + this.id)
    .then(response => { response.json()
      .then(data => {
        //ssd
        
         this.materiel = data[0][0];
          
        // console.log(this.materiel);
      })
    });
    fetch(environment.APiHotst + '/chantiers/')
    .then(response => { response.json()
      .then(data => {
        //ssd
        
         this.allchantier = data;
          
        // console.log(this.materiel);
      })
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
     if( this.ionicForm.value.qte > this.materiel.getQte ) {this.checkqte = true;
      return;
     }
      console.log(this.ionicForm.value);


    }
  }





}
