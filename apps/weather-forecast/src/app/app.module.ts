import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from 'apps/weather-forecast/src/app/components/input/input.component';
import { ToggleButtonComponent } from 'apps/weather-forecast/src/app/components/toggle-button/toggle-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherForecastServicesModule } from '@bp/weather-forecast/services';
import { ButtonComponent } from 'apps/weather-forecast/src/app/components/button/button.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from 'apps/weather-forecast/src/app/store/root/root.reducer';
import { DailyTableComponent } from 'apps/weather-forecast/src/app/components/daily-table/daily-table.component';

@NgModule({
	declarations: [AppComponent, InputComponent, ToggleButtonComponent, ButtonComponent, DailyTableComponent],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		WeatherForecastServicesModule,
		StoreModule.forRoot(rootReducer),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
