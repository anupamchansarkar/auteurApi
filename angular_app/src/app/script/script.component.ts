import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { routerNgProbeToken } from '@angular/router/src/router_module';

import { UserService, AuthenticationService, AlertService } from '@app/_services';

declare function KTFlotchartsDemo(scores, scenes): any;

@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.css']
})

export class ScriptComponent implements OnInit {

    currentUser: any;
    loading = false;
    scriptFolderId: string;
    scriptId: any;
    scriptScores: any;
    sentiment_data: any;
    sentiment_loading = false;

    constructor(private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    ) { 
        
    }

    async ngOnInit() {
        this.currentUser = await localStorage.getItem('currentUser');
        this.currentUser = JSON.parse(this.currentUser);

        // get folder scripts
        this.scriptId = this.route.snapshot.params.id;
        await this.userService.getScriptDetails(this.scriptId, this.currentUser.access_token)
            .pipe(first())
            .subscribe(
                data => {
                    this.scriptScores = data;
                    console.log(this.scriptScores);
                    this.loading = true;
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

    goHome() {
        this.router.navigate(['/folder', this.currentUser.folder_details.Scripts]);
    }

    async getSentimentGraphs() {
        this.sentiment_loading = true;
        await this.userService.getScriptSentiments(this.scriptId, this.currentUser.access_token)
            .pipe(first())
            .subscribe(
                data => {
                    this.sentiment_data = data;
                    console.log(this.sentiment_data);
                    console.log(this.sentiment_data.scores);
                    console.log(this.sentiment_data.scenes);
                    KTFlotchartsDemo(this.sentiment_data.scores, this.sentiment_data.scenes);
                },
                error => {
                    this.alertService.error(error);
                });

    }

}
