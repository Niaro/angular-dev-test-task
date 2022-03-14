import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, filter, map, of, tap } from 'rxjs';
import { WeatherForecastApiService } from '@bp/weather-forecast/services';
import { City } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';
import {
	LOAD_CITY_ACTION,
	loadCityError,
	loadCitySuccess,
} from 'apps/weather-forecast/src/app/store/cities/cities.actions';

@Injectable()
export class CitiesEffects {
	loadCity$ = createEffect(() => {
		return this.actions.pipe(
			ofType(LOAD_CITY_ACTION),
			exhaustMap(({ searchQuery }) =>
				this.weatherForecastApiService.getCity(searchQuery).pipe(
					tap((c: City[]) => !c.length && loadCityError({ errorMessage: 'City not found' })),
					filter((c: City[]) => !!c.length),
					map((city: City[]) => loadCitySuccess(city[0])),
					catchError(() => of(loadCityError({ errorMessage: 'ServerError' })))
				)
			)
		);
	});

	constructor(
		private readonly actions: Actions,
		private readonly weatherForecastApiService: WeatherForecastApiService
	) {}
}
