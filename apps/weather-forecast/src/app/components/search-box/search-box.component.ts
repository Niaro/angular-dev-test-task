import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, Subject, tap } from 'rxjs';
import { WeatherForecastApiService } from '@bp/weather-forecast/services';
import { City } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';

@Component({
	selector: 'app-search-box',
	templateUrl: './search-box.component.html',
	styleUrls: ['./search-box.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent implements OnInit {
	@Output() addCity = new EventEmitter<City>();

	checkedControl = new FormControl();
	inputControl = new FormControl();

	findCity$ = new Subject<boolean>();

	constructor(private weatherForecastApiService: WeatherForecastApiService) {}

	ngOnInit(): void {
		this.checkedControl.valueChanges
			.pipe(
				filter(value => !value),
				debounceTime(3000)
			)
			.subscribe(() => {
				this.checkedControl.setValue(true);
			});
	}

	added() {
		this.weatherForecastApiService
			.getCity(this.inputControl.value)
			.pipe(
				tap(() => this.findCity$.next(false)),
				filter((cities: City[]) => !!cities.length)
			)
			.subscribe({
				next: ([city]: City[]) => {
					this.addCity.emit(city);
					this.findCity$.next(true);
				},
				complete: () => {
					this.checkedControl.setValue(false);
				},
			});
	}
}
