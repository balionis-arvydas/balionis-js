import { Component, OnInit } from '@angular/core';
import { GridOptions, GetMainMenuItemsParams, MenuItemDef, ColDef } from 'ag-grid';
import { ValueGetterParams } from 'ag-grid/dist/lib/entities/colDef';
import { AppTableRow } from './app-table-row';
import { AppTableRenderer } from './renderers/app-table-renderer';
import { AppTableColumnComponent } from './renderers/app-table-column/app-table-column.component';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})
export class AppTableComponent implements OnInit {

  private _columns: ColDef[];

  private _rows: AppTableRow[];

  private _options: GridOptions;

  getColumns(): ColDef[] {
    return this._columns;
  }

  getRows(): AppTableRow[] {
    return this._rows;
  }

  getOptions(): GridOptions {
    return this._options;
  }

  ngOnInit() {
    this._columns = this.buildColumns();
    this._rows = this.buildRows();
    this._options = this.buildOptions();
  }

  private buildColumns(): ColDef[] {
    const tabs = ['filterMenuTab', 'columnsMenuTab', 'generalMenuTab'];
    return [
      {field: 'make',
        headerName: 'Make',
        menuTabs: tabs,
        filter: 'agSetColumnFilter',
        filterParams: {},
        lockPinned: true,
        suppressToolPanel: false,
        valueGetter: this.getFieldValue,
        cellRendererFramework: AppTableColumnComponent
      },
      {field: 'model',
        headerName: 'Model',
        menuTabs: tabs,
        filter: 'agSetColumnFilter',
        filterParams: {},
        lockPinned: true,
        suppressToolPanel: false,
        valueGetter: this.getFieldValue,
        cellRendererFramework: AppTableColumnComponent
      },
      {field: 'price',
        headerName: 'Price',
        menuTabs: tabs,
        filter: 'agSetColumnFilter',
        filterParams: {},
        lockPinned: true,
        suppressToolPanel: false,
        valueGetter: this.getFieldValue,
        cellRendererFramework: AppTableColumnComponent
      }
    ];
  }

  private buildRows(): AppTableRow[] {
    return [
      new AppTableRow(new Map<string, string>([
        [ 'make', 'Toyota'],
        [ 'model', 'Celica'],
        [ 'price', '35000']
      ])),
      new AppTableRow(new Map<string, string>([
        [ 'make', 'Ford'],
        [ 'model', 'Mondeo'],
        [ 'price', '32000']
      ])),
      new AppTableRow(new Map<string, string>([
        [ 'make', 'Porsche'],
        [ 'model', 'Boxter'],
        [ 'price', '72000']
      ]))
    ];
  }

  private buildOptions(): GridOptions {
    return <GridOptions> {
      enableColResize: true,
      enableSorting: true,
      enableFilter: true,
      headerHeight: 40,
      rowHeight: 32,
      animateRows: true,
      suppressContextMenu: true,
      rowSelection: 'single',
      suppressRowClickSelection: true,
      deltaRowDataMode: true,
      toolPanelSuppressSideButtons: true,
      getRowNodeId: (row: AppTableRow) => this.getRowNodeId(row),
      getMainMenuItems: (params) => this.getMainMenuItems(params),
      context: {
        onRowUpdate(row: AppTableRow, field: string, value: string) {
          console.warn('AppTableComponent.onControlUpdate: TODO');
        }
      }
    };
  }

  private getRowNodeId(row: AppTableRow): string {
    return row.getFieldValue('make');
  }

  private getMainMenuItems(params: GetMainMenuItemsParams): MenuItemDef[] {
    const menuItem: MenuItemDef = new class implements MenuItemDef {
      name = 'Todo Menu Item';
      action: () => void = () => {
        alert('AppComponent.getMainMenuItems: TODO');
      }
    };

    const menuItemList: MenuItemDef[] = [menuItem];

    return menuItemList;
  }

  private getFieldValue(params: ValueGetterParams): string {
    if (params && params.data) {
      const colDef: ColDef = params.colDef;
      return params.data.getFieldValue(colDef.field);
    }
    return '';
  }
}
