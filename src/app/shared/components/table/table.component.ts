import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  private _columns: any[] = [];
  @Input() set columns(data: any) {
    this._columns = data;
    this.displayedColumns = this.columns.map((c: any) => c.columnDef);
  }

  @Output() selectRow: EventEmitter<any> = new EventEmitter<any>();

  get columns(): any[] {
    return this._columns;
  }

  @Input() set data(data: any[]) {
    if (data) this.dataSource = data;
  }
  displayedColumns: string[] = [];
  dataSource: Array<any> = [];

  onSelectRow(row: any) {
    this.selectRow.emit(row);
  }
}
