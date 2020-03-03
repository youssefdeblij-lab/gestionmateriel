import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-chantier-single',
  templateUrl: './chantier-single.page.html',
  styleUrls: ['./chantier-single.page.scss'],
})
export class ChantierSinglePage implements OnInit {
  idmateriel:any;
  materiel:any = { "Idmat" : "chanrgement ....",
  "Reference" : "",
  "Designation" : "",
  "IdChantier" : "",
  "dateAffectation" : "",
  "getQte" : ""} ;
  hosting = environment.APiHotst + "/";
  images :any = [] ;
  params:any;
  constructor(private route: ActivatedRoute) { 
      this.params = this.route.params.subscribe(params => {this.idmateriel = params['id_materiel'];  });
  }
  ngOnInit() {
    fetch(environment.APiHotst + '/materiel/affected/getdetails/' + this.idmateriel)
    .then(response => { response.json()
      .then(data => {
        //ssd
        
         this.materiel = data[0][0];
         this.images = data[1];
        // console.log(this.materiel);
      })
    });
      

  
  

  }
}
