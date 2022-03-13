import { createAction, props } from '@ngrx/store';
import { City } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';

export const addCity = createAction('[App Component] Add City', props<City>());
