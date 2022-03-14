import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RootInterface } from 'apps/weather-forecast/src/app/store/root/root.interface';
import { filter, first, Subject } from 'rxjs';
import { changeSearchQueryParam } from 'apps/weather-forecast/src/app/store/search-query-param/search-query-param.actions';
import { changeModeQueryParam } from 'apps/weather-forecast/src/app/store/mode/mode-query-param.actions';
import { ActivatedRoute, Params } from '@angular/router';
import { loadCity } from 'apps/weather-forecast/src/app/store/cities/cities.actions';

@Component({
	selector: 'bp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	searchControl = new FormControl('');
	hourlyControl = new FormControl(false);

	errorMessage$ = new Subject<string | undefined>();

	dailyTableRows$ = this.store.select('dailyTableRows');

	constructor(private readonly store: Store<RootInterface>, private readonly activatedRoute: ActivatedRoute) {}

	ngOnInit(): void {
		this.activatedRoute.queryParams
			.pipe(
				filter(({ searchQuery, mode }: Params) => searchQuery !== undefined && mode !== undefined),
				first()
			)
			.subscribe((queryParams: Params) => {
				const { searchQuery: searchQueryParam, mode: modeQueryParam } = queryParams;

				this.store.dispatch(changeSearchQueryParam({ param: searchQueryParam }));
				this.store.dispatch(changeModeQueryParam({ param: modeQueryParam }));

				this.searchControl.setValue(searchQueryParam);
				this.hourlyControl.setValue(modeQueryParam === 'hourly');
			});

		this.searchControl.valueChanges.subscribe(param => this.store.dispatch(changeSearchQueryParam({ param })));
		this.hourlyControl.valueChanges.subscribe(value =>
			this.store.dispatch(changeModeQueryParam({ param: value === true ? 'hourly' : 'daily' }))
		);
	}

	addCity(): void {
		this.store.dispatch(loadCity({ searchQuery: this.searchControl.value }));
	}
}
