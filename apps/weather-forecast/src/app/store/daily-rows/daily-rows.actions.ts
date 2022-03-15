import { createAction, props } from '@ngrx/store';
import { TableRow } from 'apps/weather-forecast/src/app/core/table-row.interface';

export const ADD_DAILY_ROW = '[Daily Rows] Add Row';

export const addDailyRow = createAction(ADD_DAILY_ROW, props<TableRow>());
