import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-link',
    standalone: true,
    imports: [
		RouterLink,
	],
    templateUrl: './link.component.html',
    styleUrl: './link.component.css',
})
export class LinkComponent implements OnInit {
	@Input()
	href: string = "#";

	@Input()
	text: string = "link"

	ngOnInit(): void {}
}
