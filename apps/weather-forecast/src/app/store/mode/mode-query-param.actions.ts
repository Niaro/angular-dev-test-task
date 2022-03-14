import { createAction, props } from '@ngrx/store';
import { QueryParamProps } from 'apps/weather-forecast/src/app/core/query-param-props.interface';
import { ModeType } from 'apps/weather-forecast/src/app/core/mode.type';

export const changeModeQueryParamType = '[Mode Query Param] Change Mode Query Param';

export const changeModeQueryParam = createAction(changeModeQueryParamType, props<QueryParamProps<ModeType>>());
