import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})



export class ExchangedataService {



  constructor() { }

  ngOnInit() {
    this.getAllMateriel();
  }

  getAllMateriel(){

   
    var courses = [];
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", 'http://127.0.0.1:8000/materiels/tous/all', true);
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
         courses = JSON.parse(xmlhttp.responseText);
       return courses;
      }
    };
    xmlhttp.send();

  
  }


 
  
}


