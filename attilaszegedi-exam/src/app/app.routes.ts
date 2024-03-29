import { Routes } from '@angular/router';
import { CaseComponent } from './case/case.component';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegComponent } from './reg/reg/reg.component';

export const routes: Routes = [
   
    { // root url and rederict to case 
        path: '', 
        redirectTo: 'login',
        pathMatch: 'full'
    },
    { //login componens will be show
        path: 'login',
        component: LoginComponent
    },
    { 
        path: 'reg',
        component: RegComponent
    },
    { 
        path: 'case',
        canActivate: [authGuard],// this will be protect the route
        component: CaseComponent
    },

];
