import { Component, OnInit,  ChangeDetectorRef } from '@angular/core'; 
 import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';



import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


  

import { ToastController, Platform,   ActionSheetController } from '@ionic/angular';

import { IonicStorageModule } from '@ionic/Storage';



import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';

import { File ,FileEntry } from '@ionic-native/File/ngx';
 import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';




@Component({
  selector: 'app-transfert-materiel',
  templateUrl: './transfert-materiel.page.html',
  styleUrls: ['./transfert-materiel.page.scss'],
})
export class TransfertMaterielPage implements OnInit {


  images = [];

  files: File[] = [];
  imgprevew=new FileReader();
  imgsprevew:any[]=[];
  reader = new FileReader();
  ionicForm: FormGroup;
  isSubmitted = false;
  imNotIn = false;
  data:any ;
  chantier:any;
  params:any;
  id:any;
  materiel:any = { "Idmat" : "chargement ....",
  "Reference" : "",
  "Designation" : "",
  "IdChantier" : "",
  "dateAffectation" : "",
  "getQte" : ""} ;
  allchantier:any=[];
  checkqte:boolean = false;
  loge:any ="0";
  

  constructor(private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private toastCtrl: ToastController,
    private camera: Camera, 
    private file: File,
    private storage: IonicStorageModule, 
    private webview: WebView,
    private actionSheetController: ActionSheetController, 
    private plt: Platform, 
    private ref: ChangeDetectorRef,
    private filePath: FilePath,
    private transfer: FileTransfer,
    public loadingController: LoadingController,
    public alertController: AlertController 
      ) {
    this.params = this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.chantier = params['nameChantier']; });

   }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
   
      materiel: [''],
      chantierinput: [''],
      Vers: [''],
      qte: ['', [Validators.required]],
     
   
    });
    
    fetch(environment.APiHotst + '/materiel/affected/getdetails/' + this.id)
    .then(response => { response.json()
      .then(data => {
        //ssd
        
         this.materiel = data[0][0];
          
        // console.log(this.materiel);
      })
    });
    fetch(environment.APiHotst + '/chantiers/')
    .then(response => { response.json()
      .then(data => {
        //ssd
        
         //this.allchantier = data;
         data.forEach(element => {
           if(element.Nom != this.chantier ) this.allchantier.push(element);
         });
          
        // console.log(this.materiel);
      })
    });

   

  
  }
  

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
   
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
     if( this.ionicForm.value.qte > this.materiel.getQte  ) {
      this.checkqte = true;
      return;
     }
   
    /* if(this.images.length == 0) {
      this.loge = "vous devez choisir  une image";
      return;
     }*/
     
  


      const TransfertObject = {
        "idmat":  this.materiel.Idmat,
        "chantier": this.materiel.IdChantier  ,
        "chantierVers": this.ionicForm.value.Vers,
        "dateTransferts":"02/05/1990",
       
        "status": "validé",
        "etatsInitImg": "0",
        "etatsFinalImd": "0",
        "qte": this.ionicForm.value.qte,
        "_token": "NYATN1JDGl3Q2fMjDTMYl7X7aX4ig4pXQcX3geLSq7A"
      };

      const lien = environment.APiHotst + "/transferts/new";

      this.sendPostRequest(TransfertObject,lien);

     
    }
  }


    
  

  clickedStar(img){
    //console.log(img);
    this.imgsprevew.splice(img, 1)
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

async startUpload(imgEntry,idTransfert) {

   

const fileTransfer: FileTransferObject = this.transfer.create();
  let options: FileUploadOptions = {
    fileKey: 'file',
    fileName:  imgEntry.name,
    headers: {},
    httpMethod: 'POST',
    chunkedMode: false,
     
 }
 
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: '"starting upload ...."',
     
  });

  

  loading.present();



 //this.loge ="";

 fileTransfer.upload(imgEntry.filePath, environment.ApiUnsecured + '/upload/here.php', options)
  .then((data) => {
  
    const imgObj:any = {
       "Lien":data.response,
       "TypePhoto":"transferts",
       //id transfert
    	 "IdMateriel":idTransfert};
    
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
                loading.dismiss();
                
          })
      
  }, (err) => {
    this.loge = "Err : " + JSON.stringify( err);
    loading.dismiss();
  });



  }, (err) => {
    this.loge = "Err : " + JSON.stringify( err);
    loading.dismiss();
  })

 
}


async sendPostRequest(ObjPost,whereToPost) {
 
  const options = {
    method: 'POST',
    body: JSON.stringify(ObjPost)
    };



  fetch(whereToPost, options)
  .then(response => {
      
    response.json()
        .then(data => {
          this.loge =  "Save success"; 
          this.images.forEach(element => {
            this.startUpload(element,data.Response);
           });

           //this.presentAlert("Save success");


     })
    
    }, (err) => {
      this.loge = "Err : " + JSON.stringify( err);
    });
 
  
}

async presentAlert(msg) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'information',
    message: msg,
    buttons: ['OK']
  });

  await alert.present();
}


 


 


 
}



