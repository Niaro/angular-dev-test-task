import { City, HourlyInfo } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';
import { QueryParamProps } from 'apps/weather-forecast/src/app/core/query-param-props.interface';
import { ModeType } from 'apps/weather-forecast/src/app/core/mode.type';
import { DailyTableRow } from 'apps/weather-forecast/src/app/core/daily-table-row.interface';

export interface RootInterface {
	cities: City[];
	hourlyInfoTable: HourlyInfo[];
	dailyTableRows: DailyTableRow[];
	searchQueryParam: QueryParamProps<string>;
	modeQueryParams: QueryParamProps<ModeType>;
}
