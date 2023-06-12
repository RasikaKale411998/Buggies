import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'ngx-webstorage';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users: any;
  private isAuthenticated = false;
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  public currentUser: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  login(user_name: any, user_password: any) {
    return this.http.get(`${environment.apiUrl}Admin_user/login?admin_email_id=${user_name}&admin_password=${user_password}`)
      .pipe(map((user): any => {
        this.users = user;
        if (this.users.status == 1) {
          localStorage.setItem('currentUser', JSON.stringify(this.users));

          // localStorage.setItem('currentUser', JSON.stringify(this.users));
          // const storedData = localStorage.getItem('currentUser');
          // console.log("storedData",storedData);

          this.currentUserSubject.next(this.users);

          // Perform login logic here
          this.isAuthenticated = true;
          // Store the authentication status in local storage
          localStorage.setItem('isAuthenticated', 'true');
          return this.users;
        } else {
          return false;
        }
      }));
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  logout() {
    // Perform logout logic here
    this.isAuthenticated = false;
    // Remove the authentication status from local storage
    localStorage.removeItem('isAuthenticated');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
