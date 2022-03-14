export interface City {
	country: string;
	lat: number;
	local_names: Record<string, string>;
	lon: number;
	name: string;
	state: string;
}

export interface DailyTemp {
	day: number;
}

export interface DailyTemperature {
	temp: DailyTemp;
}

export interface HourlyTemperature {
	temp: number;
}

export interface DailyInfo {
	daily: DailyTemperature[];
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
}

export interface HourlyInfo {
	hourly: HourlyTemperature[];
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
}
