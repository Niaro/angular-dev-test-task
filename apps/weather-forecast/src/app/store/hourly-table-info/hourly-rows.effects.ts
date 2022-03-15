import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WeatherForecastApiService } from '@bp/weather-forecast/services';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { City } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';
import { addHourlyRow } from 'apps/weather-forecast/src/app/store/hourly-table-info/hourly-rows.actions';
import { LOAD_CITY_SUCCESS_ACTION } from 'apps/weather-forecast/src/app/store/cities/cities.actions';

@Injectable()
export class HourlyRowsEffects {
	addHourlyRow$ = createEffect(() =>
		this.actions$.pipe(
			ofType(LOAD_CITY_SUCCESS_ACTION),
			exhaustMap(({ name, lat, lon }: City) =>
				this.weatherForecastApiService.getHourlyInfo(lat, lon).pipe(
					map(hourlyInfo => {
						const temps = [];

						for (let i = 0; i < 24; i = i + 3) {
							temps.push(`${hourlyInfo.hourly[i].temp}°`);
						}

						return addHourlyRow({ name, temps });
					}),
					catchError(() => EMPTY)
				)
			)
		)
	);

	constructor(
		private readonly actions$: Actions,
		private readonly weatherForecastApiService: WeatherForecastApiService
	) {}
}
