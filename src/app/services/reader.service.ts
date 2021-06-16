import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  myBlob:any = null;

  constructor() { }


  createBlob() {
      return new Promise((resolve, reject) => {
          var mystring = "Hello World!";
          this.myBlob = new Blob([mystring], {
              type: 'text/plain'
          });
          setTimeout(_ => {
              resolve();
          }, 2000)
      })
  }

  async extractBlobAsync() {
      var text = await (new Response(this.myBlob)).text();
      alert('Text from async function: ' + text)
  }

  extractBlobFileReader() {
        var reader = new FileReader();
        reader.onload = function() {
            alert('Text from filereader function: ' + reader.result)
        }
        reader.readAsText(this.myBlob);
  }
}
