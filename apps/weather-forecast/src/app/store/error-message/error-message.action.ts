import { createAction, props } from '@ngrx/store';
import { ErrorMessage } from 'apps/weather-forecast/src/app/core/error-message.interface';

export const DISPLAY_ERROR_MESSAGE = '[Error Message] Display Message';
export const HIDE_ERROR_MESSAGE = '[Error Message] Hide Message';

export const displayErrorMessage = createAction(DISPLAY_ERROR_MESSAGE, props<ErrorMessage>());
export const hideErrorMessage = createAction(HIDE_ERROR_MESSAGE);
