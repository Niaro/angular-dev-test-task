import { Action, createReducer, on } from '@ngrx/store';
import { addRowToDailyInfo } from 'apps/weather-forecast/src/app/store/daily-table-info/daily-table-info.actions';
import { DailyTableRow } from 'apps/weather-forecast/src/app/core/daily-table-row.interface';

export const initialState: DailyTableRow[] = [];

const _dailyTableInfoReducer = createReducer(
	initialState,
	on(addRowToDailyInfo, (state: DailyTableRow[], addedDailyInfo: DailyTableRow) => {
		return [...state, addedDailyInfo];
	})
);

export function dailyTableInfoReducer(state: DailyTableRow[] | undefined, action: Action): DailyTableRow[] {
	return _dailyTableInfoReducer(state, action);
}
