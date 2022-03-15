import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { WeatherForecastApiService } from '@bp/weather-forecast/services';
import { City } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';
import { LOAD_CITY_ACTION, loadCitySuccess } from 'apps/weather-forecast/src/app/store/cities/cities.actions';
import { displayErrorMessage } from 'apps/weather-forecast/src/app/store/error-message/error-message.action';

@Injectable()
export class CitiesEffects {
	loadCity$ = createEffect(() => {
		return this.actions.pipe(
			ofType(LOAD_CITY_ACTION),
			exhaustMap(({ searchQuery }) =>
				this.weatherForecastApiService.getCity(searchQuery).pipe(
					map((city: City[]) =>
						city.length ? loadCitySuccess(city[0]) : displayErrorMessage({ text: 'City not found' })
					),
					catchError(() => of(displayErrorMessage({ text: 'ServerError' })))
				)
			)
		);
	});

	constructor(
		private readonly actions: Actions,
		private readonly weatherForecastApiService: WeatherForecastApiService
	) {}
}
