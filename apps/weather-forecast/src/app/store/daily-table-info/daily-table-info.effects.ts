import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LOAD_CITY_SUCCESS_ACTION } from 'apps/weather-forecast/src/app/store/cities/cities.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { City } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';
import { WeatherForecastApiService } from '@bp/weather-forecast/services';
import { addRowToDailyInfo } from 'apps/weather-forecast/src/app/store/daily-table-info/daily-table-info.actions';

@Injectable()
export class DailyTableInfoEffects {
	addRowToDailyInfo$ = createEffect(() =>
		this.actions$.pipe(
			ofType(LOAD_CITY_SUCCESS_ACTION),
			exhaustMap((city: City) =>
				this.weatherForecastApiService.getDailyInfo(city.lat, city.lon).pipe(
					map(dailyInfo => addRowToDailyInfo(dailyInfo)),
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
