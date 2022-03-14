import { citiesReducer } from 'apps/weather-forecast/src/app/store/cities/cities.reducer';
import { hourlyTableInfoReducer } from 'apps/weather-forecast/src/app/store/hourly-table-info/hourly-table-info.reducer';
import { searchQueryParamReducer } from 'apps/weather-forecast/src/app/store/search-query-param/search-query-param.reducer';
import { modeQueryParamReducer } from 'apps/weather-forecast/src/app/store/mode/mode-query-param.reducer';
import { dailyTableInfoReducer } from 'apps/weather-forecast/src/app/store/daily-table-info/daily-table-info.reducer';

export const rootReducer = {
	cities: citiesReducer,
	hourlyTableInfo: hourlyTableInfoReducer,
	dailyTableRows: dailyTableInfoReducer,
	searchQueryParam: searchQueryParamReducer,
	modeQueryParams: modeQueryParamReducer,
};
