import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(): boolean {
        if (this.authenticationService.isLoggedIn() || localStorage.getItem('isAuthenticated') === 'true') {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }
}