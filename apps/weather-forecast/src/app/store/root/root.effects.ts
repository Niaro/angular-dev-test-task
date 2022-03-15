import { HourlyRowsEffects } from 'apps/weather-forecast/src/app/store/hourly-table-info/hourly-rows.effects';
import { SearchQueryParamEffects } from 'apps/weather-forecast/src/app/store/search-query-param/search-query-param.effects';
import { ModeQueryParamEffects } from 'apps/weather-forecast/src/app/store/mode/mode-query-param.effects';
import { CitiesEffects } from 'apps/weather-forecast/src/app/store/cities/cities.effects';
import { DailyRowsEffects } from 'apps/weather-forecast/src/app/store/daily-rows/daily-rows.effects';

export const rootEffects = [
	CitiesEffects,
	HourlyRowsEffects,
	DailyRowsEffects,
	SearchQueryParamEffects,
	ModeQueryParamEffects,
];
