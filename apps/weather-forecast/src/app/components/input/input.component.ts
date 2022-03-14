import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, Provider } from '@angular/core';
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

	val = '';

	constructor(private cdr: ChangeDetectorRef) {}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onChange: (val: string) => void = () => {};
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onTouch: () => void = () => {};

	get value(): string {
		return this.val;
	}

	set value(val: string) {
		this.val = val;
		this.onChange(val);
		this.onTouch();
		this.cdr.markForCheck();
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
