import { Action, createReducer, on } from '@ngrx/store';
import {
	displayErrorMessage,
	hideErrorMessage,
} from 'apps/weather-forecast/src/app/store/error-message/error-message.action';

const initialState = '';

const _errorMessageReducer = createReducer(
	initialState,
	on(displayErrorMessage, (_, { text }) => text),
	on(hideErrorMessage, () => '')
);

export function errorMessageReducer(state: string | undefined, action: Action) {
	return _errorMessageReducer(state, action);
}
