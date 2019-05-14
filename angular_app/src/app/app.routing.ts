import { Routes, RouterModule } from '@angular/router';

import { FolderComponent } from './folder';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { ScriptComponent } from './script/script.component';

const appRoutes: Routes = [
    { path: 'folder/:id', component: FolderComponent, canActivate: [AuthGuard] },
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'script/:id', component: ScriptComponent, canActivate: [AuthGuard] },

    // otherwise redirect to login
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);