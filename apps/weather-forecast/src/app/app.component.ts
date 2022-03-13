import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'bp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'weather-forecast';
	searchControl = new FormControl();
	hourlyControl = new FormControl(false);

	addCity(): void {
		console.log(this.searchControl.value);
	}
}
