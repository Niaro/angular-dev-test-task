import { Component, OnInit } from '@angular/core';
import { WeatherForecastApiService } from '@bp/weather-forecast/services';

@Component({
	selector: 'bp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'weather-forecast';
	readonly errors$ = this.weatherForecastApi.errors$;

	constructor(private readonly weatherForecastApi: WeatherForecastApiService) {}

	ngOnInit(): void {
		this.weatherForecastApi.getWeather('Newrr', 'daily').subscribe(resolve => {
			console.log(resolve);
		});
	}

	onErrorClose() {
		this.weatherForecastApi.onClearError();
	}
}
