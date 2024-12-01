import { Component } from '@angular/core';
import { LinkComponent } from '../../components/link/link.component';

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [
		LinkComponent
	],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css',
})
export class SignupComponent {

}
