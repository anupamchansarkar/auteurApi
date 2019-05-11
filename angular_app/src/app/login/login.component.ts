import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '@app/_services';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup
    submitted = false;
    returnUrl: string;
    app_data: any;
    scriptFolderId: any;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
        // redirect to folder if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    async ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        this.app_data = await localStorage.getItem('currentUser');
        if (this.app_data){
            this.router.navigate(['folder']);
        }
        
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    async onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        await this.authenticationService.login(this.f.username.value, this.f.password.value)
            .subscribe(
                data => {
                    console.log('came here');
                    this.getUser(data);
                },
                error => {
                    this.alertService.error(error);
                });
    }

    private async getUser(data: string) {
        await this.authenticationService.get_user(data)
            .subscribe( 
                data => {
                    this.router.navigate(['folder', data.folder_details.Scripts]);
                },
                error => {
                    this.alertService.error(error);
                });
    }
}
