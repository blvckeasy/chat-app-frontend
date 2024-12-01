import { Component } from '@angular/core';
import { LinkComponent } from '../../components/link/link.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertComponent } from '../../components/alert/alert.component';
import { IUser } from '../../interfaces/user.interfaces';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    standalone: true,
    imports: [
        FormsModule,
        LinkComponent,
        AlertComponent,
    ],
    templateUrl: './signin.component.html',
    styleUrl: './signin.component.css',
    providers: [AuthService]
})
export class SigninComponent {
    username!: string;
    password!: string;
    errorMessage?: string | null;

    constructor (
        private authService: AuthService,
        private router: Router
    ) {}

    async signin () {
        const response = this.authService.signin(this.username, this.password);

        response.subscribe((data: any) => {
            if (!data.ok) {
                this.errorMessage = data.message
                return;
            }

            this.errorMessage = null;

            const user = data.data;
            const accessToken = data.token.accessToken;
            
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("access_token", accessToken);

            this.router.navigate(["/"]);
        })
    }
}
