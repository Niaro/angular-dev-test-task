import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RootInterface } from 'apps/weather-forecast/src/app/store/root/root.interface';
import { WeatherForecastApiService } from '@bp/weather-forecast/services';
import { City } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';
import { addCity } from 'apps/weather-forecast/src/app/store/cities/cities.actions';
import { filter, Subject, tap } from 'rxjs';

@Component({
	selector: 'bp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'weather-forecast';
	searchControl = new FormControl();
	hourlyControl = new FormControl(false);

	errorMessage$ = new Subject<string | undefined>();

	constructor(
		private readonly store: Store<RootInterface>,
		private readonly weatherForecastApiService: WeatherForecastApiService
	) {}

	ngOnInit(): void {
		this.store.select('cities').subscribe(c => {
			console.log(c);
		});
	}

	addCity(): void {
		this.weatherForecastApiService
			.getCity(this.searchControl.value)
			.pipe(
				tap((c: City[]) => !c.length && this.errorMessage$.next('City not found')),
				filter((c: City[]) => !!c.length)
			)
			.subscribe(
				(c: City[]) => {
					this.store.dispatch(addCity(c[0]));
					this.errorMessage$.next(undefined);
				},
				() => this.errorMessage$.next('Server error')
			);
	}
}
