import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, Input, ViewChild, OnInit,  SimpleChanges, OnChanges } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/feature/employee/Employee';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
 
/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit, OnChanges {
  displayedColumns: string[] = [];
  dataSource :any

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() tableData: any[]
  @Input() showBtns: boolean
  @Input() deleteEmp: (args: Employee) => void


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.displayedColumns = Object.keys(this.tableData[0])

    // if (this.tableData && this.tableData.length >0) {

    //   this.displayedColumns = Object.keys(this.tableData[0])
    //   //check if we should add actions column 
    //   if (this.showBtns) {
    //     this.displayedColumns.push('actions')
    //   }
    // }
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tableData && this.tableData.length > 0) {
      this.displayedColumns = Object.keys(this.tableData[0])
      //check if we should add actions column 
      if (this.showBtns) {
        this.displayedColumns.push('actions')
      }
    }

    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
