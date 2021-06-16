import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/Authentication.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user_name :any;
  id :any;
  constructor(  private authService: AuthenticationService,) { }

  ngOnInit() {
     this.authService.storage.get('USER_INFO').then((val) => {
      this.user_name = val;
      this.id = val.id;
      
    });
  }
  logoutUser(){
    this.authService.logout();
  }

}
