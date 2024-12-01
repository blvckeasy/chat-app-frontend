import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinkComponent } from '../../components/link/link.component';

@Component({
    selector: 'app-signin',
    standalone: true,
    imports: [LinkComponent],
    templateUrl: './signin.component.html',
    styleUrl: './signin.component.css',
})
export class SigninComponent {}
