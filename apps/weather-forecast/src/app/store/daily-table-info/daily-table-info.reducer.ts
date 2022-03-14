import { DailyInfo } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { addRowToDailyInfo } from 'apps/weather-forecast/src/app/store/daily-table-info/daily-table-info.actions';

export const initialState: DailyInfo[] = [];

export const _dailyTableInfoReducer = createReducer(
	initialState,
	on(addRowToDailyInfo, (state: DailyInfo[], addedDailyInfo: DailyInfo) => {
		return [...state, addedDailyInfo];
	})
);

export function dailyTableInfoReducer(state: DailyInfo[] | undefined, action: Action): DailyInfo[] {
	return _dailyTableInfoReducer(state, action);
}
