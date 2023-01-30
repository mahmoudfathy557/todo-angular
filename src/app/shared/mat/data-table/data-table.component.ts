import { AfterViewInit, Component, Input, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';
import { Employee } from 'src/app/feature/employee/Employee';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  dataSource: DataTableDataSource;
  @Input() tableData: any[]
  @Input() showBtns: boolean
  @Input() deleteEmp: (args:Employee)=>void
  @Output() onDeleteEmp: EventEmitter<Employee> = new EventEmitter()

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  // displayedColumns = ['id', 'name'];
  displayedColumns: string[] = []
 

  constructor() {
    this.dataSource = new DataTableDataSource();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.displayedColumns = Object.keys(this.tableData[0])

  //check if we should add actions column 
    if (this.showBtns){
      this.displayedColumns.push('actions')
    }
 
    this.dataSource.data = this.tableData;
    
  }

  ngAfterViewInit(): void {
    console.log(this.tableData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }




}
