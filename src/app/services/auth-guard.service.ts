import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthenticationService } from './Authentication.service';

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router,public authenticationService: AuthenticationService) {
    
  }

 
  canActivate(): boolean {
    return this.authenticationService.isAuthenticated();
  }
}
