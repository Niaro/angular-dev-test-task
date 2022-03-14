import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActivatedRoute, Router } from '@angular/router';
import { changeModeQueryParamType } from 'apps/weather-forecast/src/app/store/mode/mode-query-param.actions';
import { filter, tap } from 'rxjs';

@Injectable()
export class ModeQueryParamEffects {
	readonly changeModeQueryParam = createEffect(
		() =>
			this.actions$.pipe(
				ofType(changeModeQueryParamType),
				filter(({ param }) => !!param),
				tap(({ param }) => {
					const queryParams = this.activatedRoute.snapshot.queryParams;

					this.router.navigate([], {
						relativeTo: this.activatedRoute,
						queryParams: { ...queryParams, mode: param },
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
