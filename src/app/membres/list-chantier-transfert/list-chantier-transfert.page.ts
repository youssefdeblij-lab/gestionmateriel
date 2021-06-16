import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from 'src/app/services/Authentication.service';
import { NavController } from '@ionic/angular'; 


@Component({
  selector: 'app-list-chantier-transfert',
  templateUrl: './list-chantier-transfert.page.html',
  styleUrls: ['./list-chantier-transfert.page.scss'],
})

export class ListChantierTransfertPage implements OnInit {

  objResponsable:any;
  chantiers:any = [];
  List_transfert:any = []; 
  isempty:boolean=true;


  constructor(private authService: AuthenticationService,private ref: ChangeDetectorRef,public navCtrl: NavController) { }

  ngOnInit() {
    this.objResponsable = this.authService.storage.get('USER_INFO').then((val) => {
      console.log(val.id);
      fetch(environment.APiHotst + '/chantiers/getByResponsble/' + val.id)
      .then(response => {
          
          response.json()
              .then(data => {
                 // console.log(data);
                  this.chantiers = data;
                  this.chantiers.forEach(element => {
                      if(element.Id){
                            fetch(environment.APiHotst + '/transferts/chantier/' + element.Id)
                            .then(response => {
                                
                                response.json()
                                    .then(data => {
                                       console.log(data);
                                       data.forEach(element2 => {
                                          if(element2.Id){ 
                                            element2.chantierSource = element.desingation;

                                            this.List_transfert = [element2, ...this.List_transfert];
                                            this.isempty =false;

                                          }
                                       });
                        
                                    });
                                
                            });
                          }   
                    
                  });
              });
          
      });
    });

   

  }

  onChange($event){
    console.log($event.target.value);
    if($event.target.value == "status"){
      this.List_transfert =  this.List_transfert.sort(this.comparestatus);
      
    }
    if($event.target.value == "date"){
      this.List_transfert =  this.List_transfert.sort(this.comparedate);
      
    }
  
    this.ref.detectChanges(); // trigger change detection cycle

  }

   comparedate(a, b) {
    
    const bandA = new Date(a.DateTransferts);
    const bandB = new Date(b.DateTransferts);
  
    let comparison = 0;
    if (bandA < bandB) {
      comparison = 1;
    } else if (bandA > bandB) {
      comparison = -1;
    }
    return comparison;
  }

  comparestatus(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.Status.toUpperCase();
    const bandB = b.Status.toUpperCase();
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }

  setcolor(status):string{
  if(status == 'encours') return 'danger';
  else return 'success';
  }


 

}
