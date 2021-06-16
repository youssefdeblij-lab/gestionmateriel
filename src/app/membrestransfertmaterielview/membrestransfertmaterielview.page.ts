import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment'; 

@Component({
  selector: 'app-membrestransfertmaterielview',
  templateUrl: './membrestransfertmaterielview.page.html',
  styleUrls: ['./membrestransfertmaterielview.page.scss'],
})
export class MembrestransfertmaterielviewPage implements OnInit {
  id:any;
  imgs:any=[];
  dataTransfert:any=this.initdataObjet();
  params:any;
  hosting:string = environment.APiHotst ;

  constructor(private route: ActivatedRoute) {
      this.params = this.route.params.subscribe(params => {
      this.id = params['id']; 
       });
   }

  ngOnInit() {
   
    fetch(environment.APiHotst +  "/transferts/GetByidTrnsfets/" + this.id)
    .then(response => {
      response.json()
      .then(data => {
        this.dataTransfert = data[0];
        this.imgs = this.dataTransfert.imgTransfert;
        
        console.log(this.dataTransfert);
      })
    });
  }


initdataObjet(){
return {
  "Id": "-----------",
"Chantier": "------------",
"ChantierVers": "-----------------",
"ChantierVersDesingation": "----",
"Status": "----",
"DateTransferts": "-----",
"Qte": "---",
"Idmat": "----",
"Reference": "-----",
"Designation": "------",
"IdChantier": "-----",
"dateAffectation": "---------------",
"getQte": "-------------------"
};
}

setcolor(status):string{
  if(status == 'encours') return 'danger';
  else return 'success';
  }

}
