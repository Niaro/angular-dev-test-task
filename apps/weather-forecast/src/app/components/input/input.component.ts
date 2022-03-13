import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output, Provider } from '@angular/core';
import { City } from 'libs/weather-forecast/services/src/lib/weather-forecast-api.interface';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const VALUE_ACCESSOR_PROVIDER: Provider = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => InputComponent),
	multi: true,
};

@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [VALUE_ACCESSOR_PROVIDER],
})
export class InputComponent implements ControlValueAccessor {
	@Input() placeholder = '';
	@Output() addCity = new EventEmitter<City>();

	val = '';

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onChange: (val: string) => void = () => {};
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onTouch: () => void = () => {};

	set value(val: string) {
		this.val = val;
		this.onChange(val);
		this.onTouch();
	}

	writeValue(value: string) {
		this.value = value;
	}

	registerOnChange(fn: (val: string) => void) {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void) {
		this.onTouch = fn;
	}
}
