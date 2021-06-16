import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastController, ActionSheetController, Platform } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File ,FileEntry } from '@ionic-native/File/ngx';
 


import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';



import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';


@Component({
  selector: 'app-accusedereception',
  templateUrl: './accusedereception.page.html',
  styleUrls: ['./accusedereception.page.scss'],
})
export class AccusedereceptionPage implements OnInit {
  
  id:any;
  images:any=[];
  dataTransfert:any=this.initdataObjet();

  params:any;
  hosting:string = environment.APiHotst ;
  files: File[] = [];
  imgprevew=new FileReader();
  imgsprevew:any[]=[];
  reader = new FileReader();
   isSubmitted = false;
  imNotIn = false;
  data:any ;
  chantier:any;
  loge:any ="0";



  constructor(private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private camera: Camera, 
    private file: File,
    private webview: WebView,
    private actionSheetController: ActionSheetController, 
    private plt: Platform, 
    private ref: ChangeDetectorRef,
     private filePath: FilePath,
     private transfer: FileTransfer
    ) { 
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
       // this.imgs = this.dataTransfert.imgTransfert;
        
        console.log(this.dataTransfert);
      })
    });

  }
  //Init Object
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



      async presentToast(msg) {
        const toast = await this.toastCtrl.create({
          message: msg,
          duration: 2000
        });
        toast.present();
      }

      readUploadedFileAsText = file => {
        const temporaryFileReader = new FileReader();
    
        return new Promise((resolve, reject) => {
          temporaryFileReader.onerror = () => {
            temporaryFileReader.abort();
            reject(new DOMException("Problem parsing input file."));
          };
    
          temporaryFileReader.onload = () => {
            resolve(temporaryFileReader.result);
            this.presentToast('msg');
          };
          temporaryFileReader.readAsText(file);
        });
      }


      pathForImage(img) {
        if (img === null) {
          return '';
        } else {
          let converted = this.webview.convertFileSrc(img);
          return converted;
        }
      }

      async selectImage() {
        const actionSheet = await this.actionSheetController.create({
            header: "Select Image source",
            buttons: [{
                    text: 'Depuis la galerie',
                    handler: () => {
                        this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Par Camera',
                    handler: () => {
                        this.takePicture(this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        await actionSheet.present();
    }

    takePicture(sourceType: PictureSourceType) {
      var options: CameraOptions = {
          quality: 30,
          sourceType: sourceType,
          saveToPhotoAlbum: false,
          correctOrientation: true
      };
   
      this.camera.getPicture(options).then(imagePath => {
          if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
              this.filePath.resolveNativePath(imagePath)
                  .then(filePath => {
                      let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                      let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                  });
          } else {
              var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
              var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
              this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          }
      });
   
  }

  createFileName() {
    var d = new Date(),
        n = d.getTime(),
        newFileName = n + ".jpg";
    return newFileName;
  }
  
  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
         this.updateStoredImages(newFileName);
        
  
         }, error => {
        this.presentToast('Error while storing file.');
    }); 
  
  
  
  }
  
  updateStoredImages(name) {
  
    let newImages = [name];
    let filePath = this.file.dataDirectory + name;
    let resPath = this.pathForImage(filePath);

    let newEntry = {
        name: name,
        path: resPath,
        filePath: filePath
    };

    this.images = [newEntry, ...this.images];
    this.ref.detectChanges(); // trigger change detection cycle

}


deleteImage(imgEntry, position) {
this.images.splice(position, 1);
}



startUpload(imgEntry,idchantier) {

   

  const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName:  imgEntry.name,
      headers: {},
      httpMethod: 'POST',
      chunkedMode: false,
       
   }
  
  
   this.loge ="starting upload ....";
  
   fileTransfer.upload(imgEntry.filePath, environment.ApiUnsecured + '/upload/here.php', options)
    .then((data) => {
    
      const imgObj:any = {
         "Lien":data.response,
         "TypePhoto":"reception",
         //id transfert
         "IdMateriel":this.id};
      
          const options = {
              method: 'POST',
              body: JSON.stringify(imgObj)
          };
          
          this.loge = "upload -  Success";
  
          fetch( environment.APiHotst + "/img/materiel/new", options)
          .then(response => {
              
            response.json()
                .then(data => {

                  this.loge =  "Envoi  transfert  - Success";
                  

                  
            })
        
    }, (err) => {
      this.loge = "Err : " + JSON.stringify( err);
    });
    //set imag recep en database
    const imgObj2:any = {
      "Lien":data.response,
      "TypePhoto":"affected",
      "IdMateriel":idchantier};
   
       const options2 = {
           method: 'POST',
           body: JSON.stringify(imgObj2)
       };

    fetch( environment.APiHotst + "/img/materiel/new", options2)
            .then(response => {
                
              response.json()
                  .then(data => {

                    this.loge =  "Envoi  transfert  - Success";
                    

                    
              })
          
        }, (err) => {
        this.loge = "Err : " + JSON.stringify( err);
        });
    
  
  
  
    }, (err) => {
      this.loge = "Err : " + JSON.stringify( err);
    })
  
   
  }
  
  

  sendPostMataffectedData(idMat,idchantier,idChantierVers,refrence,qte) {
   let ObjPost={
     "idmat":idMat,
     "idChantier":idchantier,
     "qte_demander":qte,
     "idChantierVers":idChantierVers,
     "reference":refrence
    };
   let whereToPost= environment.ApiUnsecured  + "/materiel/affected/editAffected";
 
    const options = {
      method: 'POST',
      body: JSON.stringify(ObjPost)
  };
 
  
  
  
    fetch(whereToPost, options)
    .then(response => {
        
      response.json()
          .then(data => {
            this.loge = data.Response;  
            if(this.images.length != 0){
              this.images.forEach(element => {
                this.startUpload(element,idchantier );
               }); 
            }
            
             fetch(environment.ApiUnsecured  + "/transferts/editerstatusaccuse/reception/" + this.id)
              .then(response => {
                  
                response.json()
                    .then(data => {
                      this.loge =  data.Response; 
                      
            
                })
                
            }, (err) => {
              this.loge = "Err : " + JSON.stringify( err);
            });

  
       })
      
  }, (err) => {
    this.loge = "Err : " + JSON.stringify( err);
  });
   
    
  }
  








}
