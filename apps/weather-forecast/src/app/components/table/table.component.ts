import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
	@Input() headerRow: string[] = [];
	@Input() rows: string[][] = [];
}
