import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
// import {  } from '@angular/forms/src/validators';
import { MyDirective } from '../directives/onfocusdirective';
import { AuthenticationService } from 'app/services/authentication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  test: Date = new Date();
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  form = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z\s]*")]),
    middlename: new FormControl('', [Validators.required, , Validators.pattern("^[a-zA-Z\s]*")]),
    lastname: new FormControl('', [Validators.required, , Validators.pattern("^[a-zA-Z\s]*")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
    password: new FormControl('', Validators.required)
  });
  get firstname() {
    return this.form.get('firstname')
  }
  get middlename() {
    return this.form.get('middlename')
  }
  get lastname() {
    return this.form.get('lastname')
  }
  get email() {
    return this.form.get('email')
  }
  get password() {
    return this.form.get('password')
  }

  onSubmit(): void {
console.log(this.form.value)
    if (this.form.valid) {
      this.authenticationService
        .registerUser(this.form.value)
        .subscribe(
        user => {
          if (!user.success) {
            // this.loading=false;

            //         this.errors = user.errors
          }
          else {
            // this.loading=false;

            this.authenticationService.storeUserData(user.token, user.user);
            this.router.navigate(['/login']);
          }

        });

    }
  }

}
