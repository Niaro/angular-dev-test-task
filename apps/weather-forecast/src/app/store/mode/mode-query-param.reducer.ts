import { QueryParamProps } from 'apps/weather-forecast/src/app/core/query-param-props.interface';
import { ModeType } from 'apps/weather-forecast/src/app/core/mode.type';
import { Action, createReducer, on } from '@ngrx/store';
import { changeModeQueryParam } from 'apps/weather-forecast/src/app/store/mode/mode-query-param.actions';

export const initialState: QueryParamProps<ModeType> = {
	param: 'hourly',
};

const _modeQueryParamReducer = createReducer(
	initialState,
	on(changeModeQueryParam, (_, newValue) => newValue)
);

export function modeQueryParamReducer(
	state: QueryParamProps<ModeType> | undefined,
	action: Action
): QueryParamProps<ModeType> {
	return _modeQueryParamReducer(state, action);
}
