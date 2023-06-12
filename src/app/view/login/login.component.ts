import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  returnUrl!: string;
  submitted = false;
  passwordVisible = false;
  loading = false;
  users : any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private router: Router,
    private toastrService: ToastrService,
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user_name: ["", Validators.required],
      user_password: ["", Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      this.authenticationService.login(this.f['user_name'].value, this.f['user_password'].value)
        .subscribe({
          next: (v:any) => {
            // if user id and password id wrong  
            // console.log(v);
            
            if (v.status == 0) {
              this.toastrService.error('Message Error!', v.message, { positionClass: 'toast-top-right' });
              this.router.navigate(['/']);
            }else if (v.status == 1) {
              // localStorage.setItem('currentUser', JSON.stringify(this.users));

              // successfully login and redirect to home page
              this.router.navigate(["home/rideMgt"]);
            }
          },
          error: (e) => console.error(e),
          // complete: () => console.info('complete')
        }
        );
    }


  }



  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

}
