import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WeatherForecastApiService } from '@bp/weather-forecast/services';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { City } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';
import { addRowToHourlyInfo } from 'apps/weather-forecast/src/app/store/hourly-table-info/hourly-table-info.actions';
import { LOAD_CITY_SUCCESS_ACTION } from 'apps/weather-forecast/src/app/store/cities/cities.actions';

@Injectable()
export class HourlyTableInfoEffects {
	addRowToHourlyInfo$ = createEffect(() =>
		this.actions$.pipe(
			ofType(LOAD_CITY_SUCCESS_ACTION),
			exhaustMap((city: City) =>
				this.weatherForecastApiService.getHourlyInfo(city.lat, city.lon).pipe(
					map(hourlyInfo => addRowToHourlyInfo(hourlyInfo)),
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
