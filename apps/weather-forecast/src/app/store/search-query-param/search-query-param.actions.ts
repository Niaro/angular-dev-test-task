import { createAction, props } from '@ngrx/store';
import { QueryParamProps } from 'apps/weather-forecast/src/app/core/query-param-props.interface';

export const changeSearchQueryParamType = '[Search Query Param] Change Search Query Param';

export const changeSearchQueryParam = createAction(changeSearchQueryParamType, props<QueryParamProps<string>>());
