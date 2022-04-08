import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'bp-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
	readonly form = new FormGroup({
		search: new FormControl(null, [Validators.required, Validators.minLength(2)]),
	});

	@Output() city = new EventEmitter<string>();

	ngOnInit(): void {
		console.log(this.form.invalid);
	}

	onSearch() {
		if (this.form.valid) {
			this.city.emit(this.form.controls.search.value);
		}
	}
}
