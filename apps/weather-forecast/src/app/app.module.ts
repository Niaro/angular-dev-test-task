import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from 'apps/weather-forecast/src/app/components/input/input.component';
import { ToggleButtonComponent } from 'apps/weather-forecast/src/app/components/toggle-button/toggle-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherForecastServicesModule } from '@bp/weather-forecast/services';
import { ButtonComponent } from 'apps/weather-forecast/src/app/components/button/button.component';

@NgModule({
	declarations: [AppComponent, InputComponent, ToggleButtonComponent, ButtonComponent],
	imports: [BrowserModule, FormsModule, ReactiveFormsModule, WeatherForecastServicesModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
