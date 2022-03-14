import { HourlyTableInfoEffects } from 'apps/weather-forecast/src/app/store/hourly-table-info/hourly-table-info.effects';
import { SearchQueryParamEffects } from 'apps/weather-forecast/src/app/store/search-query-param/search-query-param.effects';
import { ModeQueryParamEffects } from 'apps/weather-forecast/src/app/store/mode/mode-query-param.effects';
import { CitiesEffects } from 'apps/weather-forecast/src/app/store/cities/cities.effects';
import { DailyTableInfoEffects } from 'apps/weather-forecast/src/app/store/daily-table-info/daily-table-info.effects';

export const rootEffects = [
	CitiesEffects,
	HourlyTableInfoEffects,
	DailyTableInfoEffects,
	SearchQueryParamEffects,
	ModeQueryParamEffects,
];
