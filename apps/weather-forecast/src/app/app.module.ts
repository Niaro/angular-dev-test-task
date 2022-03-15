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
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { rootEffects } from 'apps/weather-forecast/src/app/store/root/root.effects';
import { TableComponent } from 'apps/weather-forecast/src/app/components/table/table.component';

@NgModule({
	declarations: [AppComponent, InputComponent, ToggleButtonComponent, ButtonComponent, TableComponent],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		WeatherForecastServicesModule,
		RouterModule.forRoot([]),
		EffectsModule.forRoot(rootEffects),
		StoreModule.forRoot(rootReducer),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
