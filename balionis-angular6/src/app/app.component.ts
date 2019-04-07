import { Component } from '@angular/core';
import {
  GridOptions,
  GridApi,
  ColumnApi,
  ColDef,
  AgGridEvent,
  ICellRendererParams
} from 'ag-grid-community';
import { AppDatasource } from './app-datasource';
import { AppRow } from './app-row';
import 'ag-grid-enterprise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private gridApi: GridApi;
  private gridColumnApi: ColumnApi;
  private gridOptions: GridOptions;

  private columnDefs: ColDef[];
  private defaultColDef: ColDef;
  private autoGroupColumnDef: ColDef;
  private rowData: AppRow[];

  constructor(private datasource: AppDatasource) {
    this.columnDefs = [
      {
        field: 'id',
        hide: false
      },
      {
        field: 'fullName',
        hide: true
      },
      {
        field: 'fs',
        headerName: 'FS',
        width: 80
      },
      {
        field: 'ss',
        headerName: 'SS',
        width: 80
      }
    ];

    this.defaultColDef = <ColDef>{
      resizable: true
    };

    this.autoGroupColumnDef = <ColDef>{
      headerName: 'Full Name',
      width: 200,
      cellRendererParams: {
        innerRenderer: function(params: ICellRendererParams) {
          return params.data.fullName;
        }
      }
    };

    this.gridOptions = <GridOptions> {
      headerHeight: 40,
      rowHeight: 32
    };
  }

  isServerSideGroup(row: AppRow): boolean {
    return row.hasChildren;
  }

  getServerSideGroupKey(row: AppRow): string {
    return row.id;
  }

  onGridReady(params: AgGridEvent) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.setServerSideDatasource(this.datasource);
    this.gridApi.sizeColumnsToFit();
  }
}
