import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/Authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authenticationService.authState.subscribe(state => {
        if (state) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['login']);
        }
      });
      
    });
  }
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Dashboard",
        url   : "/dashboard",
        icon  : "home"
      },
     
    ]
  }
}
