import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { routerNgProbeToken } from '@angular/router/src/router_module';

import { UserService, AuthenticationService, AlertService } from '@app/_services';

@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.css']
})

export class ScriptComponent implements OnInit {

  currentUser: any;
  loading = false;
  folderdata: any;
  scriptFolderId: string;
  script: any;
  script_scores: any;
  yours: any;
  standard: any;

  constructor(private router: Router,
  private authenticationService: AuthenticationService,
  private userService: UserService,
  private alertService: AlertService
    ) { 
    
  }

  async ngOnInit() {
        this.currentUser = await localStorage.getItem('currentUser');

        this.currentUser = JSON.parse(this.currentUser);

        // get folder scripts
        if (!this.folderdata) {
            this.script = await this.userService.get_saved_script();
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
            await this.userService.get_script_details(this.script.id, this.currentUser.access_token)
                .pipe(first())
                .subscribe(
                    data => {
                        this.script_scores = data;
                        console.log(this.script_scores);
                        this.loading = true;
                    },
                    error => {
                        this.alertService.error(error);
                        this.loading = false;
                    });
          }
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    this.router.navigate([""]);
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

}
