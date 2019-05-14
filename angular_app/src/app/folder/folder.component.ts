import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import {Router, ActivatedRoute} from '@angular/router';
import { UserService, AlertService } from '@app/_services';

@Component({ templateUrl: 'folder.component.html' })
export class FolderComponent implements OnInit {
    currentUser: any;
    testUser: any;
    loading = false;
    users: any[] = [];
    folderData: any;
    folderId: any;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService
    ) {
        
    }

    async ngOnInit() {
        this.currentUser = await localStorage.getItem('currentUser');
        this.currentUser = JSON.parse(this.currentUser);
        this.folderId = this.route.snapshot.params.id;
        await this.userService.getFolders(this.folderId, this.currentUser.access_token)
            .subscribe(
                data => {
                    this.folderData = data;
                    this.loading = true;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    getFolder(folderName) {
        if (folderName == 'Scripts') {
            this.router.navigate(['/folder', this.currentUser.folder_details.Scripts]);
            this.ngOnInit();
            this.loading = false;
        } else {
            this.router.navigate(['/folder', this.currentUser.folder_details.Archive]);
            this.ngOnInit();
            this.loading = false;
        }
    }

    selectDocument(script) {
        this.router.navigate(['script', script.id]);
    }

    goHome() {
        this.router.navigate(['/folder', this.currentUser.folder_details.Scripts]);
        this.ngOnInit();
        this.loading = false;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        this.router.navigate([""]);
    }
}