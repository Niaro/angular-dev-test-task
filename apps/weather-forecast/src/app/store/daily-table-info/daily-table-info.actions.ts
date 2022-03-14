import { createAction, props } from '@ngrx/store';
import { DailyInfo } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';

export const ADD_ROW_TO_DAILY_INFO = '[Daily Table Ingo] Add Row';

export const addRowToDailyInfo = createAction(ADD_ROW_TO_DAILY_INFO, props<DailyInfo>());
