import { Action, createReducer, on } from '@ngrx/store';
import { changeSearchQueryParam } from 'apps/weather-forecast/src/app/store/search-query-param/search-query-param.actions';
import { QueryParamProps } from 'apps/weather-forecast/src/app/core/query-param-props.interface';

export const initialState: QueryParamProps<string> = { param: '' };

const _searchQueryParamReducer = createReducer(
	initialState,
	on(changeSearchQueryParam, (_, newValue) => newValue)
);

export function searchQueryParamReducer(
	state: QueryParamProps<string> | undefined,
	action: Action
): QueryParamProps<string> {
	return _searchQueryParamReducer(state, action);
}
