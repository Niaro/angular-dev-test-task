import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { City, DailyInfo, HourlyInfo } from './weather-forecast-api.interface';

@Injectable({ providedIn: 'root' })
export class WeatherForecastApiService {
	private _url = 'http://api.openweathermap.org';
	private _apiKey = '010721642521f31b0fbc8c3831d45951';

	constructor(private readonly http: HttpClient) {}

	getCity(cityName: string): Observable<City[]> {
		return this.http.get<City[]>(`${this._url}/geo/1.0/direct?q=${cityName}&limit=1&appid=${this._apiKey}`);
	}

	getHourlyInfo(lat: number, lon: number): Observable<HourlyInfo> {
		return this.http.get<HourlyInfo>(
			`${this._url}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&units=metric&appid=${this._apiKey}`
		);
	}

	getDailyInfo(lat: number, lon: number): Observable<DailyInfo> {
		return this.http.get<DailyInfo>(
			`${this._url}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${this._apiKey}`
		);
	}
}
