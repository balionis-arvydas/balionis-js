import { Component } from '@angular/core';
import {GridOptions, GridApi, ColDef, ColumnApi, GridReadyEvent} from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'balionis-angular8';

  columnDefs: ColDef[] = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'}
  ];

  defaultColDef: ColDef = {
    width: 150,
    // editable: false,
    // suppressSorting: false,
    // suppressMovable: true,
    // filter: 'agTextColumnFilter',
    suppressMenu: false,
    menuTabs: ['generalMenuTab', 'columnsMenuTab', 'filterMenuTab']
  };

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  private gridColumnApi: ColumnApi;
  private gridApi: GridApi;

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    console.error('onGridReady: gridApi=', this.gridApi);
    this.gridColumnApi = params.columnApi;
    console.error('onGridReady: gridColumnApi=', this.gridColumnApi);
  }

  getRowNodeId(data: any) {
    return data.make;
  }
}
