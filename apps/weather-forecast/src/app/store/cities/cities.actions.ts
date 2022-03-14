import { createAction, props } from '@ngrx/store';
import { City } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';

export const LOAD_CITY_ACTION = '[Cities] Load City';
export const LOAD_CITY_SUCCESS_ACTION = '[Cities] Load City Success';
export const LOAD_CITY_ERROR_ACTION = '[Cities] Load City Error';

export const loadCity = createAction(LOAD_CITY_ACTION, props<{ searchQuery: string }>());
export const loadCitySuccess = createAction(LOAD_CITY_SUCCESS_ACTION, props<City>());
export const loadCityError = createAction(LOAD_CITY_ERROR_ACTION, props<{ errorMessage: string }>());
