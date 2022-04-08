export interface DailyWeatherDto {
	daily: DailyWeatherEl[];
}

export interface DailyWeatherEl {
	temp: {
		day: number;
		eve: number;
		max: number;
		min: number;
		morn: number;
		night: number;
	};
}
