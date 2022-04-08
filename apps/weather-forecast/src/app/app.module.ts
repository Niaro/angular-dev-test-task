import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherForecastServicesModule } from '@bp/weather-forecast/services';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, WeatherForecastServicesModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
