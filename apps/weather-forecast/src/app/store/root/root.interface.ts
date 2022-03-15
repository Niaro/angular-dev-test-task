import { City } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';
import { QueryParamProps } from 'apps/weather-forecast/src/app/core/query-param-props.interface';
import { ModeType } from 'apps/weather-forecast/src/app/core/mode.type';

export interface RootInterface {
	cities: City[];
	searchQueryParam: QueryParamProps<string>;
	modeQueryParams: QueryParamProps<ModeType>;
	dailyHeaderRow: string[];
	dailyRows: string[][];
	hourlyHeaderRow: string[];
	hourlyRows: string[][];
	errorMessage: string;
}
