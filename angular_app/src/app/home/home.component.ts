import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import {Router} from '@angular/router';
import { UserService, AuthenticationService, AlertService } from '@app/_services';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: any;
    testUser: any;
    scriptFolderId: string;
    loading = false;
    users: any[] = [];
    folderdata: any;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private router: Router,
        private alertService: AlertService
    ) {
        
    }

    async ngOnInit() {
        this.currentUser = await localStorage.getItem('currentUser');
        this.currentUser = JSON.parse(this.currentUser);

        // get folder scripts
        this.loading = true;
        if (!this.folderdata) {
            console.log("Reloading data");
            for (var i in this.currentUser.folder_details) {
                if (this.currentUser.folder_details[i].name == 'Scripts'){
                    this.scriptFolderId = this.currentUser.folder_details[i].id;
                }
            }

            await this.userService.get_folders(this.scriptFolderId, this.currentUser.access_token)
                .pipe(first())
                .subscribe(
                    data => {
                        this.folderdata = data;
                        console.log(this.folderdata)
                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;
                    });
        }
    }

    async get_scripts_folder() {
        for (var i in this.currentUser.folder_details) {
            if (this.currentUser.folder_details[i].name == 'Scripts'){
                this.scriptFolderId = this.currentUser.folder_details[i].id;
            }
        }
        await this.userService.get_folders(this.scriptFolderId, this.currentUser.access_token)
            .pipe(first())
            .subscribe(
                data => {
                    this.folderdata = data;
                    console.log(this.folderdata)
                    this.router.navigate(['/home']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    async get_archive_folder() {
        for (var i in this.currentUser.folder_details) {
            if (this.currentUser.folder_details[i].name == 'Archive'){
                this.scriptFolderId = this.currentUser.folder_details[i].id;
            }
        }
        await this.userService.get_folders(this.scriptFolderId, this.currentUser.access_token)
            .pipe(first())
            .subscribe(
                data => {
                    this.folderdata = data;
                    console.log(this.folderdata)
                    this.router.navigate(['/home']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        this.router.navigate([""]);
    }
    
}