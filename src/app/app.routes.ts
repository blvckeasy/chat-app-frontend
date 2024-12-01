import { Routes } from '@angular/router';
import { SigninComponent } from '../pages/signin/signin.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { ChatComponent } from '../pages/chat/chat.component';

export const routes: Routes = [
    {
        path: '',
        component: ChatComponent
    },
    {
        path: 'signin',
        component: SigninComponent,
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: "**",
        redirectTo: "/signin",
        pathMatch: "full"
    }
];