import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { FolderComponent } from './folder';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';;
import { ScriptComponent } from './script/script.component'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        FolderComponent,
        LoginComponent,
        RegisterComponent
,
        ScriptComponent    ],
    providers: [
        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }