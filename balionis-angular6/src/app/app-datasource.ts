import { IServerSideDatasource, IServerSideGetRowsParams } from 'ag-grid-community';
import { AppRow } from './app-row';

export class AppDatasource implements IServerSideDatasource {

    getRows(params: IServerSideGetRowsParams) {
        // simulate server side get...
        const rows = this.buildRows(params.request.groupKeys);
        setTimeout(() => {
            params.successCallback(rows, rows.length);
        }, 2000);
    }

    private buildRows(keys: string[]): AppRow[] {
        const rows: AppRow[] = [];

        const prefixId = keys.join('');
        const prefixName = keys.join('/');
        rows.push(new AppRow(prefixId + '1', prefixName + '/A', true));
        rows.push(new AppRow(prefixId + '2', prefixName + '/B', true));
        rows.push(new AppRow(prefixId + '3', prefixName + '/C', false));

        return rows;
    }
}
