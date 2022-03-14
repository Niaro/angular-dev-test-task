import { createAction, props } from '@ngrx/store';
import { DailyTableRow } from 'apps/weather-forecast/src/app/core/daily-table-row.interface';

export const ADD_ROW_TO_DAILY_INFO = '[Daily Table Ingo] Add Row';

export const addRowToDailyInfo = createAction(ADD_ROW_TO_DAILY_INFO, props<DailyTableRow>());
