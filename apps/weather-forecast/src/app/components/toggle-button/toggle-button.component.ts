import { ChangeDetectionStrategy, Component, forwardRef, Input, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const VALUE_ACCESSOR_PROVIDER: Provider = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => ToggleButtonComponent),
	multi: true,
};

@Component({
	selector: 'app-toggle-button',
	templateUrl: './toggle-button.component.html',
	styleUrls: ['toggle-button.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [VALUE_ACCESSOR_PROVIDER],
})
export class ToggleButtonComponent implements ControlValueAccessor {
	@Input() leftLabel = '';
	@Input() rightLabel = '';

	val = true;

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onChange: (val: boolean) => void = () => {};
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onTouch: () => void = () => {};

	set value(val: boolean) {
		this.onChange(val);
		this.onTouch();
	}

	writeValue(value: boolean): void {
		this.value = value;
	}

	registerOnChange(fn: (val: boolean) => void): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouch = fn;
	}

	click(value: boolean): void {
		this.value = value;
	}
}
