import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import {Router, ActivatedRoute} from '@angular/router';
import { UserService, AlertService } from '@app/_services';

@Component({ 
    templateUrl: 'folder.component.html', 
    styleUrls: ['folder.component.css'] 
    })
export class FolderComponent implements OnInit {
    currentUser: any;
    testUser: any;
    loading = false;
    users: any[] = [];
    folderData: any;
    genreList: any;
    folderId: any;
    fileToUpload: File = null;
    genreValue: any = null;

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
                    
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
        await this.userService.getGenreList(this.currentUser.access_token)
            .subscribe(
                genreList => {
                    this.genreList = genreList;
                    this.loading = true;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            );
    }

    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
        if (!this.genreValue) {
            alert('Please select a genre from the list');
            location.reload();
        }
        this.uploadFileToActivity();
    }

    dropdownValue(value) {
        this.genreValue = value;
    }

    uploadFileToActivity() {
        this.userService.postFile(this.fileToUpload, this.currentUser.access_token, this.genreValue).subscribe(data => {
          // do something, if upload success
          location.reload();
          }, error => {
            alert('failed on upload');
            location.reload();
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