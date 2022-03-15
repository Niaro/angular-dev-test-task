import { citiesReducer } from 'apps/weather-forecast/src/app/store/cities/cities.reducer';
import { hourlyRowsReducer } from 'apps/weather-forecast/src/app/store/hourly-table-info/hourly-rows.reducer';
import { searchQueryParamReducer } from 'apps/weather-forecast/src/app/store/search-query-param/search-query-param.reducer';
import { modeQueryParamReducer } from 'apps/weather-forecast/src/app/store/mode/mode-query-param.reducer';
import { dailyRowsReducer } from 'apps/weather-forecast/src/app/store/daily-rows/daily-rows.reducer';
import { hourlyHeaderRowReducer } from 'apps/weather-forecast/src/app/store/hourly-header-row/hourly-header-row.reducer';
import { dailyHeaderRowReducer } from 'apps/weather-forecast/src/app/store/daily-header-row/daily-header-row.reducer';
import { errorMessageReducer } from 'apps/weather-forecast/src/app/store/error-message/error-message.reducer';

export const rootReducer = {
	cities: citiesReducer,
	searchQueryParam: searchQueryParamReducer,
	modeQueryParams: modeQueryParamReducer,
	dailyHeaderRow: dailyHeaderRowReducer,
	dailyRows: dailyRowsReducer,
	hourlyHeaderRow: hourlyHeaderRowReducer,
	hourlyRows: hourlyRowsReducer,
	errorMessage: errorMessageReducer,
};
