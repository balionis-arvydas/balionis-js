import { AgRendererComponent } from 'ag-grid-angular/src/interfaces';
import { ICellRendererParams, ColDef } from 'ag-grid';
import { AppTableRow } from '../app-table-row';

export class AppTableRenderer implements AgRendererComponent {

    private _field: string;
    private _value: string;

    private _params: ICellRendererParams;
    private _data: AppTableRow;

    getValue(): string {
        return this._value;
    }

    agInit(params: ICellRendererParams): void {
        this.init(params);
    }

    refresh(params: ICellRendererParams): boolean {
        this.init(params);
        return true;
    }

    private init(params: ICellRendererParams): void {
        this._params = params;
        if (params) {
            const colDef: ColDef = params.colDef;
            this._field = colDef.field;

            this._data = params.data;
            this._value = this._data.getFieldValue(this._field);
        }
    }
}
