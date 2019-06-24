import { FormBuilder, FormControl, Validators, FormGroup} from '@angular/forms';
import { RouterModule } from "@angular/router";
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'ng2-validation';
import { first } from 'rxjs/operators';

import {AuthenticationService } from 'app/_services';


@Component({templateUrl: './login.component.html'})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  appData: any;
  scriptFolderId: any;
  loginError = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  async ngOnInit() {

    const password = new FormControl('', Validators.required);
    const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.appData = await localStorage.getItem('currentUser');
    this.appData = JSON.parse(this.appData);
    if (this.appData){
        this.router.navigate(['folder', this.appData.folder_details.Scripts]);
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  async onSubmit() {
    this.submitted = true;
    this.loginError = false;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    await this.authenticationService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        data => {
          this.getUser(data);
        },
          error => {
          this.loginError = true;
        });
    }

  private async getUser(data: string) {
    await this.authenticationService.getUser(data)
      .pipe(first())
      .subscribe( 
        data => {
          this.router.navigate(['folder', data.folder_details.Scripts]);
        },
        error => {
          this.loginError = true;
        });
    }
}

