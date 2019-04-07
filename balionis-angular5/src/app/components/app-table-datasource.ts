import {IEnterpriseDatasource, IEnterpriseGetRowsParams} from 'ag-grid';
import {AppTableRow} from './app-table-row';
export class AppTableDatasource implements IEnterpriseDatasource {
    getRows(params: IEnterpriseGetRowsParams) {

        const rows = this.buildRows(params.request.groupKeys);
        setTimeout( () => {
            params.successCallback(rows, rows.length);
        }, 2000);
    }

    private buildRows(keys: string[]): AppTableRow[] {
        const rows: AppTableRow[] = [];

        console.error('buildRows: keys=', keys);

        const prefix = keys.join('');

        const row1 = <AppTableRow>{
            id: prefix + '1',
            path: [...keys, 'A'],
            fullName: prefix + '?A',
            hasChildren: true,
            fs: 'Y',
            ss: 'Y'
        };
        rows.push(row1);

        const row2 = <AppTableRow>{
            id: prefix + '2',
            path: [...keys, 'B'],
            fullName: prefix + '?B',
            hasChildren: true,
            fs: 'Y',
            ss: 'N'
        };
        rows.push(row2);

        const row3 = <AppTableRow>{
            id: prefix + '3',
            path: [...keys, 'C'],
            fullName: prefix + '?C',
            hasChildren: false,
            fs: 'N',
            ss: 'N'
        };
        rows.push(row3);

        return rows;
    }
}
