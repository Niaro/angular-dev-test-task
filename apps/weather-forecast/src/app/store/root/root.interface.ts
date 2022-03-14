import { City, HourlyInfo } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';
import { QueryParamProps } from 'apps/weather-forecast/src/app/core/query-param-props.interface';
import { ModeType } from 'apps/weather-forecast/src/app/core/mode.type';

export interface RootInterface {
	cities: City[];
	hourlyInfoTable: HourlyInfo[];
	searchQueryParam: QueryParamProps<string>;
	modeQueryParams: QueryParamProps<ModeType>;
}
