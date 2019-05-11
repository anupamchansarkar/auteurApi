import { Component, OnInit, OnDestroy } from '@angular/core';
import { first } from 'rxjs/operators';

import {Router} from '@angular/router';
import { UserService, AlertService } from '@app/_services';

@Component({ templateUrl: 'folder.component.html' })
export class FolderComponent implements OnInit {
    currentUser: any;
    testUser: any;
    loading = false;
    users: any[] = [];
    folderdata: any;

    constructor(
        private userService: UserService,
        private router: Router,
        private alertService: AlertService
    ) {
        
    }

    async ngOnInit() {
        this.currentUser = await localStorage.getItem('currentUser');
        this.currentUser = JSON.parse(this.currentUser);

        // get folder scripts
        if (!this.folderdata) {

            await this.userService.get_folders(this.currentUser.folder_details.Scripts, this.currentUser.access_token)
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
                this.loading = true;
        }
    }

    get_folder(folderName) {
       this.router.navigate(['/folder', this.currentUser.folder_details.folderName]);
    }

    select_document(script) {
        this.userService.save_script(script);
        this.router.navigate(['script']);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        this.router.navigate([""]);
    }
    
}