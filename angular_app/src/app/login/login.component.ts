import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import {AuthenticationService } from '@app/_services';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup
    submitted = false;
    returnUrl: string;
    appData: any;
    scriptFolderId: any;
    loginError = false;
    source: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
    ) {
        // redirect to folder if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    async ngOnInit() {
        this.route.queryParams
            .filter(params => params.source)
            .subscribe(params => {

            this.source = params.source;
            console.log(this.source);
            localStorage.setItem('source', this.source);
        });

        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        this.appData = await localStorage.getItem('currentUser');
        if (this.appData){
            this.router.navigate(['folder']);
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
