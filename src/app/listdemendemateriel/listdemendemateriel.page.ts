import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/Authentication.service';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-listdemendemateriel',
  templateUrl: './listdemendemateriel.page.html',
  styleUrls: ['./listdemendemateriel.page.scss'],
})
export class ListdemendematerielPage implements OnInit {
 
  objResponsable:any;
  demandes:any = [];
  List_transfert:any = []; 
  isempty:boolean=true;

  constructor(private authService: AuthenticationService,private ref: ChangeDetectorRef,public navCtrl: NavController) { }

  ngOnInit() { 
    this.objResponsable = this.authService.storage.get('USER_INFO').then((val) => {
      console.log(val.id);
      fetch(environment.APiHotst + '/demandes/chantier/' + val.id)
      .then(response => {
          
          response.json()
              .then(data => {
                  console.log(data);
                  this.demandes = data; 
                  
              });
          
      });
    });
  }

}
