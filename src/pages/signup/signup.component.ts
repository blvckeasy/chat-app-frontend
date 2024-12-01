import { Component } from '@angular/core';
import { LinkComponent } from '../../components/link/link.component';
import { AuthService } from '../../services/auth.service';
import { AlertComponent } from '../../components/alert/alert.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [
        FormsModule,
		LinkComponent,
        AlertComponent,
	],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css',
    providers: [AuthService]
})
export class SignupComponent {
    fullname!: string;
    username!: string;
    password!: string;
    profile_image?: any;

    errorMessage: string | null = null;

    constructor (
        private authService: AuthService,
        private router: Router,
    ) {}

    onFileSelected(event: any) {
        if(event.target.files.length > 0) {
           this.profile_image = event.target.files[0];
        }
    }

    async signup () {
        const formData = new FormData();

        formData.append("fullname", this.fullname);
        formData.append("username", this.username);
        formData.append("password", this.password);
        formData.append("profile_image", this.profile_image);

        const responseObservable = this.authService.signup(formData);

        responseObservable.subscribe((response: any) => {
            if (!response.ok) {
                this.errorMessage = response.message;
                return;
            }

            const user = response.data;
            const accessToken = response.token.accessToken;

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('accessToken', accessToken);

            this.router.navigate(['/'])
        })
    }
}
