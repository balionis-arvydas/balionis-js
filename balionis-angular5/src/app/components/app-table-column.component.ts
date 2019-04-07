import { Component } from '@angular/core';
import { ICellRendererParams, ColDef } from 'ag-grid';
import { AppTableRow } from './app-table-row';
import { AgRendererComponent } from 'ag-grid-angular';

@Component({
    selector: 'app-table-column',
    templateUrl: './app-table-column.component.html',
    styleUrls: ['./app-table-column.component.scss']
  })
export class AppTableColumnComponent implements AgRendererComponent {

    private _field: string;
    private _value: string;

    private _params: ICellRendererParams;
    private _data: AppTableRow;

    getValue(): string {
        return this._value;
    }

    agInit(params: ICellRendererParams): void {
        this.initComponent(params);
    }

    refresh(params: ICellRendererParams): boolean {
        this.initComponent(params);
        return true;
    }

    private initComponent(params: ICellRendererParams): void {
        this._params = params;
        if (params) {
            const colDef: ColDef = params.colDef;
            this._field = colDef.field;

            this._data = params.data;
            this._value = this._data[this._field];
        }
    }
}
