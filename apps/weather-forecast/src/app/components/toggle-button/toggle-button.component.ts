import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-toggle-button',
	templateUrl: './toggle-button.component.html',
	styleUrls: ['toggle-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleButtonComponent implements OnInit {
	@Input() mode: 'hourly' | 'daily' = 'hourly';
	@Output() changeMode = new EventEmitter<'hourly' | 'daily'>();

	checkedControl = new FormControl(this.mode === 'hourly');

	ngOnInit(): void {
		this.checkedControl.valueChanges.subscribe(value => this.changeMode.emit(value ? 'daily' : 'hourly'));
	}
}
