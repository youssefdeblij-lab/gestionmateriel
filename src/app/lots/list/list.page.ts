import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/Authentication.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  id:any;
  chantier:any=[];
  transfert:any=[];
  isempty:boolean= false;
  constructor(private authService: AuthenticationService,) { }
 
  ngOnInit() {

    this.authService.storage.get('USER_INFO').then((val) => { 
      this.id = val.id;
      
      fetch(environment.APiHotst +  "/chantiers/getByResponsble/" + this.id)
        .then(response => {
          response.json()
          .then(data => {
            console.log(data);
            this.chantier = data;
            this.chantier.forEach(element=>{
              if(element.Id){
                fetch(environment.APiHotst +  "/lots/GetbyidchantersSource/" + element.Id)
                .then(response => {
                  response.json()
                  .then(data => {
                      let arr:any=[];
                      this.isempty = true;
                      arr=data;
                      arr.forEach(element => {
                        let nbrMat = element.materiels.length;
                        element.nbrMat = nbrMat;
                        element.status = this.filtrer( element.materiels);
                        this.transfert.push(element);
                      });
                      console.log(this.transfert);

                  })})
              } 
            });

          })
        });
      
    });

    

  }

  setcolor(s){
    return 'primary';
  }
  filtrer(arr){
    let obj:any ={};
    obj.encours = 0 ;
    obj.annule = 0 ;
    obj.valide = 0 ;
    arr.forEach(element => {
      switch(element.status){
        case "encours" : obj.encours+=1 ;break;
        case "validé" :  obj.valide+=1 ;break;
        case "annulé" : obj.annule+=1 ;break;
      }
    });
    return obj;
  }

}
