import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import { AuthenticationService } from 'src/app/services/Authentication.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
   chantiers=[] ;
    objResponsable:any ;
    isempty:boolean=true;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.objResponsable = this.authService.storage.get('USER_INFO').then((val) => {
      //console.log(val.id);
      fetch(environment.APiHotst + '/chantiers/getByResponsble/' + val.id)
      .then(response => {
          
          response.json()
              .then(data => {
                 // console.log(data);
                  this.chantiers = data; 
                  this.isempty =false;
              });
          
      });
    });
 
  }


}
