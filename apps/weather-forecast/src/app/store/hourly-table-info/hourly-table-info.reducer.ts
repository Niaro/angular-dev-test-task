import { HourlyInfo } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { addRowToHourlyInfo } from 'apps/weather-forecast/src/app/store/hourly-table-info/hourly-table-info.actions';

export const initialState: HourlyInfo[] = [];

const _hourlyTableInfoReducer = createReducer(
	initialState,
	on(addRowToHourlyInfo, (state: HourlyInfo[], addedHourlyInfo: HourlyInfo) => {
		return [...state, addedHourlyInfo];
	})
);

export function hourlyTableInfoReducer(state: HourlyInfo[] | undefined, action: Action): HourlyInfo[] {
	return _hourlyTableInfoReducer(state, action);
}
