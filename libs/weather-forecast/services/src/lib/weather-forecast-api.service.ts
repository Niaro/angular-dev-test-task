import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';

interface CityDto {
	lat: number;
	lon: number;
	name: string;
}

@Injectable({ providedIn: 'root' })
export class WeatherForecastApiService {
	private readonly _apiKey = '010721642521f31b0fbc8c3831d45951';

	// http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid={API key}
	private readonly _apiCityUrl = 'https://api.openweathermap.org/geo/1.0/direct';

	// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=current,minutely,daily,alerts&appid={API key}
	// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=current,minutely,hourly,alerts&appid={API key}
	private readonly _apiWeatherUrl = 'https://api.openweathermap.org/data/2.5/onecall';

	constructor(private readonly _http: HttpClient) {}

	getWeather<W>(cityName: string, mode: 'daily' | 'hourly'): Observable<W> {
		return this._getCity(cityName).pipe(
			switchMap(cities => {
				console.log(cities);
				return this._getWeather<W>(cities.lat.toString(), cities.lon.toString(), mode);
			})
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

	private _getWeather<T>(lat: string, lon: string, mode: 'daily' | 'hourly'): Observable<T> {
		const options = {
			lat,
			lon,
			appid: this._apiKey,
			exclude: mode === 'daily' ? 'daily' : 'hourly',
			units: 'metric',
			cnt: '3',
		};

		mode === 'daily' ? (options.exclude = 'daily') : (options.exclude = 'hourly');

		const params = this._setHttpParams(options);
		return this._http.get<T>(this._apiWeatherUrl, { params });
	}

	private _setHttpParams(options: Record<string, string>): HttpParams {
		let params = new HttpParams();

		Object.keys(options).forEach((option: string) => {
			params = params.append(option, options[option]);
		});

		return params;
	}
}
