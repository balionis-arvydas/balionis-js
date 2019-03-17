import { Component } from '@angular/core';
import { GridOptions, GetMainMenuItemsParams, MenuItemDef } from 'ag-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'balionis-angular3';

  columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'}
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  gridOptions = <GridOptions> {
    enableColResize: true,
    enableScrolling: true,
    enableFilter: true,
    headerHeight: 40,
    rowHeight: 32,
    animateRows: true,
    suppressContextMenu: true,
    rowSelection: 'single',
    suppressRowClickSelection: true,
    deltaRowDataMode: true,
    getRowNodeId: (row) => this.getRowNodeId(row),
    getMainMenuItems: (params) => this.getMainMenuItems(params)
  };

  private getRowNodeId(row: any): string {
    return row.make;
  }

  private getMainMenuItems(params: GetMainMenuItemsParams): MenuItemDef[] {

    const menuItem: MenuItemDef = new class implements MenuItemDef {
      name = 'Fake Menu Item';
      action: () => void = () => {
        console.warn('AppComponent.getMainMenuItems: TODO');
      }
    };

    const menuItemList: MenuItemDef[] = [menuItem];

    return menuItemList;
  }
}
