import { Component } from '@angular/core';

@Component({
	selector: 'app-global-nav-bar',
	templateUrl: './global-nav-bar.component.html',
	styleUrls: ['./global-nav-bar.component.scss']
})
export class GlobalNavBarComponent {

	moveToLink(url: string) {
		window.open(url, '_blank');
	}
}
