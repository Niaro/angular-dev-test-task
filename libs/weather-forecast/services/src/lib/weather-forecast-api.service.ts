import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';

import { DailyWeatherDto, CityDto, WeatherLine } from './interfaces';

@Injectable({ providedIn: 'root' })
export class WeatherForecastApiService {
	private readonly _apiKey = '010721642521f31b0fbc8c3831d45951';
	private readonly _apiCityUrl = 'https://api.openweathermap.org/geo/1.0/direct';
	private readonly _apiWeatherUrl = 'https://api.openweathermap.org/data/2.5/onecall';

	constructor(private readonly _http: HttpClient) {}

	getWeather(cityName: string, mode: 'daily' | 'hourly'): Observable<any> {
		return this._getCity(cityName).pipe(
			switchMap(city => {
				return mode === 'daily' ? this._getDailyWeather(city) : this._getDailyWeather(city);
			})
		);
	}

	private _getDailyWeather(city: CityDto): Observable<WeatherLine> {
		const options = {
			lat: city.lat.toString(),
			lon: city.lon.toString(),
			appid: this._apiKey,
			exclude: 'current,minutely,hourly,alerts',
			units: 'metric',
		};

		const params = this._setHttpParams(options);
		return this._http
			.get<DailyWeatherDto>(this._apiWeatherUrl, { params })
			.pipe(
				map(days => ({ city: city.name, temp: days.daily.map(day => Math.round(day.temp.day)).slice(0, 7) }))
			);
	}

	private _getCity(name: string): Observable<CityDto> {
		const options = {
			q: name,
			limit: '1',
			appid: this._apiKey,
		};

		const params = this._setHttpParams(options);
		return this._http.get<CityDto[]>(this._apiCityUrl, { params }).pipe(map(cities => cities[0]));
	}

	private _setHttpParams(options: Record<string, string>): HttpParams {
		let params = new HttpParams();

		Object.keys(options).forEach((option: string) => {
			params = params.append(option, options[option]);
		});

		return params;
	}
}
