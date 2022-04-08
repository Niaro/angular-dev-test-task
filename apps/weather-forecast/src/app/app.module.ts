import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { WeatherForecastServicesModule } from '@bp/weather-forecast/services';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
	declarations: [AppComponent, SearchComponent],
	imports: [BrowserModule, WeatherForecastServicesModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
