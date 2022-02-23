import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime, filter } from "rxjs";

@Component({
	selector: 'app-search-box',
	templateUrl: './search-box.component.html',
	styleUrls: ['./search-box.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent implements OnInit {
	checkedFormControl = new FormControl();
	inputFormControl = new FormControl();

	ngOnInit(): void {
		this.checkedFormControl.valueChanges
			.pipe(
				filter(value => !value),
				debounceTime(3000),
			)
			.subscribe(() => {
				this.checkedFormControl.setValue(true);
			});

		this.inputFormControl.valueChanges.subscribe((value) => {
			console.log(value);
		})

		this.checkedFormControl.valueChanges.subscribe((v) => {
			console.log(v);
		})
	}
}
