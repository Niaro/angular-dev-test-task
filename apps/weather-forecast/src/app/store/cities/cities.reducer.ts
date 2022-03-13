import { Action, createReducer, on } from '@ngrx/store';
import { addCity } from 'apps/weather-forecast/src/app/store/cities/cities.actions';
import { City } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';

export const initialState: City[] = [];

const _citiesReducer = createReducer(
	initialState,
	on(addCity, (state: City[], addedCity: City) => [...state, addedCity])
);

export function citiesReducer(state: City[] | undefined, action: Action): City[] {
	return _citiesReducer(state, action);
}
