import { Component, OnInit, OnDestroy } from '@angular/core';
import { GridOptions, GridApi, AgGridEvent, ColDef, RowGroupOpenedEvent, RowNode } from 'ag-grid';
import { AppTableRow } from './app-table-row';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent implements OnInit, OnDestroy {

  columnDefs: ColDef[];

  gridOptions: GridOptions;

  autoGroupColumnDef: ColDef;

  private _gridApi: GridApi;

  private _rowData: AppTableRow[];

  private _groupOpenedListener: Function;

  ngOnInit() {
    this.columnDefs = this.buildColumns();
    this.gridOptions = this.buildOptions();
    this.autoGroupColumnDef = this.buildGroupColumnDef();
    this._rowData = [];

    this._groupOpenedListener = (event2: RowGroupOpenedEvent) => {
      const row = <AppTableRow>event2.data;
      if (!row.loaded) {
        row.loaded = true;
        const rows = this.buildRows(row.path);
        this._rowData.push(...rows);
        this._gridApi.setRowData(this._rowData);

        this._gridApi.forEachNode((node: RowNode) => {
          const row2 = <AppTableRow>node.data;
          if (this.isStartedWith(row.path, row2.path)) {
            node.setExpanded(true);
          }
        });
      }

      /*
      */
    };
  }

  private isStartedWith(arg1: string[], arg2: string[]) {
    if (arg1.length >= arg2.length) {
      return JSON.stringify(arg1.slice(0, arg2.length)) === JSON.stringify(arg2);
    } else {
      return false;
    }
  }

  ngOnDestroy() {
    if (this._gridApi) {
      this._gridApi.removeEventListener('rowGroupOpened', this._groupOpenedListener);
    }
  }

  getDataPath(data: AppTableRow) {
    return data.path;
  }

  onGridReady(event: AgGridEvent) {
    this._gridApi = event.api;
    this._gridApi.sizeColumnsToFit();
    this._gridApi.addEventListener('rowGroupOpened', this._groupOpenedListener);
    this._rowData = this.buildRows([]);
    this._gridApi.setRowData(this._rowData);
  }

  private buildColumns(): ColDef[] {
    return [
      {field: 'id',
        headerName: '#'
      },
      {field: 'fullName',
        headerName: 'Full Name'
      },
      {field: 'fs',
        headerName: 'FS'
      },
      {field: 'ss',
        headerName: 'SS'
      }
    ];
  }

  private buildRows(path: string[]): AppTableRow[] {
    const rows = [];

    const prefix = path.join('');

    const row1 = <AppTableRow>{
      id: prefix + '1',
      path: [...path, 'A'],
      fullName: 'A',
      hasChildren: true,
      fs: 'Y',
      ss: 'Y',
      loaded: false
    };
    rows.push(row1);

    const row11 = <AppTableRow>{
      id: prefix + '1.1',
      path: [...path, 'A', '...'],
      loaded: false
    };
    rows.push(row11);

    const row2 = <AppTableRow>{
      id: prefix + '2',
      path: [...path, 'B'],
      fullName: 'B',
      hasChildren: true,
      fs: 'Y',
      ss: 'N',
      loaded: false
    };
    rows.push(row2);

    const row21 = <AppTableRow>{
      id: prefix + '2.1',
      path: [...path, 'B', '...'],
      loaded: false
    };
    rows.push(row21);

    const row3 = <AppTableRow>{
      id: prefix + '3',
      path: [...path, 'C'],
      fullName: 'C',
      hasChildren: false,
      fs: 'N',
      ss: 'N',
      loaded: true
    };
    rows.push(row3);

    return rows;
  }

  private buildOptions(): GridOptions {
    return <GridOptions> {
      headerHeight: 40,
      rowHeight: 32,
      animateRows: true
    };
  }

  private buildGroupColumnDef(): ColDef {
    return {
      headerName: 'Hierarchy',
      width: 250,
      cellRendererParams: {
        suppressCount: true,
      }
    };
  }
}
