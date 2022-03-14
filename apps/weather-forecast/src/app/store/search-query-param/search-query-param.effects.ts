import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { changeSearchQueryParamType } from 'apps/weather-forecast/src/app/store/search-query-param/search-query-param.actions';
import { tap } from 'rxjs';

@Injectable()
export class SearchQueryParamEffects {
	readonly changeSearchQueryParam$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(changeSearchQueryParamType),
				tap(({ param }) => {
					const queryParams = this.activatedRoute.snapshot.queryParams;

					this.router.navigate([], {
						relativeTo: this.activatedRoute,
						queryParams: { ...queryParams, searchQuery: param },
						queryParamsHandling: 'merge',
					});
				})
			),
		{ dispatch: false }
	);

	constructor(
		private readonly actions$: Actions,
		private readonly router: Router,
		private readonly activatedRoute: ActivatedRoute
	) {}
}
