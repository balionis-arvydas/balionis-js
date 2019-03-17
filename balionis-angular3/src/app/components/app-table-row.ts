export class AppTableRow {
    private _data: Map<string, string>;

    constructor(data: Map<string, string>) {
       this._data = data;
    }

    getFieldValue(fieldName: string): string {
        return this._data.has(fieldName) ? this._data.get(fieldName) : fieldName;
    }
}
