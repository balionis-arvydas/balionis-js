import { Component, OnInit } from '@angular/core';
import { GridOptions, GridApi, AgGridEvent, ColDef } from 'ag-grid';
import { AppTableRow } from './app-table-row';
import { AppTableColumnComponent } from './app-table-column.component';
import { AppTableDatasource } from './app-table-datasource';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent implements OnInit {

  columnDefs: ColDef[];

  rowData: AppTableRow[];

  gridOptions: GridOptions;

  autoGroupColumnDef: ColDef;

  private _gridApi: GridApi;

  constructor(private datasource: AppTableDatasource) {
  }

  ngOnInit() {
    this.columnDefs = this.buildColumns();
    // this.rowData = this.buildRows();
    this.gridOptions = this.buildOptions();
    this.autoGroupColumnDef = this.buildGroupColumnDef();
  }

  getDataPath(data: AppTableRow) {
    return data.path;
  }

  onGridReady(event: AgGridEvent) {
    this._gridApi = event.api;
    this._gridApi.sizeColumnsToFit();
    this._gridApi.setEnterpriseDatasource(this.datasource);
  }

  private buildColumns(): ColDef[] {
    return [
      {field: 'path',
        headerName: 'Path',
        rowGroup: true,
        hide: true
      },
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
        headerName: 'SS',
        cellRendererFramework: AppTableColumnComponent
      }
    ];
  }

  private buildRows(): AppTableRow[] {
    const rows = [];

    const row1 = <AppTableRow>{
      id: '1',
      path: ['A'],
      fullName: 'A',
      hasChildren: true,
      fs: 'Y',
      ss: 'Y'
    };
    rows.push(row1);

    const row11 = <AppTableRow>{
      id: '1.1',
      path: ['A', 'More...']
    };
    rows.push(row11);

    const row2 = <AppTableRow>{
      id: '2',
      path: ['B'],
      fullName: 'B',
      hasChildren: true,
      fs: 'Y',
      ss: 'N'
    };
    rows.push(row2);

    const row21 = <AppTableRow>{
      id: '2.1',
      path: ['B', 'More...']
    };
    rows.push(row21);

    const row3 = <AppTableRow>{
      id: '3',
      path: ['C'],
      fullName: 'C',
      hasChildren: false,
      fs: 'N',
      ss: 'N'
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
      width: 250
    };
  }
}
