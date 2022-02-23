import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { City } from './weather-forecast-api.interface';

@Injectable({ providedIn: 'root' })
export class WeatherForecastApiService {
	private _url = 'http://api.openweathermap.org';
	private _apiKey = '010721642521f31b0fbc8c3831d45951';

	constructor(private readonly http: HttpClient) {}

	getCity(cityName: string): Observable<City[]> {
		return this.http.get<City[]>(`${this._url}/geo/1.0/direct?q=${cityName}&limit=1&appid=${this._apiKey}`);
	}
}
