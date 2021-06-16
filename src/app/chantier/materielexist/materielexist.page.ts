import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-materielexist',
  templateUrl: './materielexist.page.html',
  styleUrls: ['./materielexist.page.scss'],
})
export class MaterielexistPage implements OnInit {
  id:any;
  chantier:any;
  params:any;
  isempty:boolean=true;

  List_materiels:any = [] ;
  constructor(private route: ActivatedRoute) { 
    this.params = this.route.params.subscribe(params => {
     this.id = params['id']; 
     this.chantier = params['nameChantier']; });
  }

  ngOnInit() {
  // console.log(this.id);
  //console.log(val.id);
  fetch(environment.APiHotst + '/materiel/affected/getByChantier/' + this.id)
  .then(response => {
      
      response.json()
          .then(data => {
             // console.log(data);
             data.forEach(element => {
               if(element.getQte != 0 ) this.List_materiels.push(element);
             });
              //this.List_materiels = data;
              this.isempty =false;

          });
      
  });
  }
 
}
