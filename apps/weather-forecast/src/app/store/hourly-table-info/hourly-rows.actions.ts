import { createAction, props } from '@ngrx/store';
import { TableRow } from 'apps/weather-forecast/src/app/core/table-row.interface';

export const ADD_HOURLY_ROW = '[Hourly Rows] Add Row';

export const addHourlyRow = createAction(ADD_HOURLY_ROW, props<TableRow>());
