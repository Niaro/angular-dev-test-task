import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LOAD_CITY_SUCCESS_ACTION } from 'apps/weather-forecast/src/app/store/cities/cities.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { City } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';
import { WeatherForecastApiService } from '@bp/weather-forecast/services';
import { addDailyRow } from 'apps/weather-forecast/src/app/store/daily-rows/daily-rows.actions';

@Injectable()
export class DailyRowsEffects {
	addDailyRow$ = createEffect(() =>
		this.actions$.pipe(
			ofType(LOAD_CITY_SUCCESS_ACTION),
			exhaustMap(({ name, lat, lon }: City) =>
				this.weatherForecastApiService.getDailyInfo(lat, lon).pipe(
					map(({ daily }) => daily.slice(0, daily.length - 1).map(day => `${day.temp.day}°`)),
					map(temps => addDailyRow({ name, temps })),
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
