import { Action, createReducer, on } from '@ngrx/store';
import { addHourlyRow } from 'apps/weather-forecast/src/app/store/hourly-table-info/hourly-rows.actions';
import { TableRow } from 'apps/weather-forecast/src/app/core/table-row.interface';

export const initialState: string[][] = [];

const _hourlyRowsReducer = createReducer(
	initialState,
	on(addHourlyRow, (state: string[][], addedHourlyInfo: TableRow) => {
		return [...state, [addedHourlyInfo.name, ...addedHourlyInfo.temps]];
	})
);

export function hourlyRowsReducer(state: string[][] | undefined, action: Action): string[][] {
	return _hourlyRowsReducer(state, action);
}
