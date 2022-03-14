import { createAction, props } from '@ngrx/store';
import { HourlyInfo } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';

export const LOAD_HOURLY_INFO_SUCCESS = '[Hourly Table Ingo] Add Row';

export const addRowToHourlyInfo = createAction(LOAD_HOURLY_INFO_SUCCESS, props<HourlyInfo>());
