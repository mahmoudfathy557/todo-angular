"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataTableComponent = void 0;
var core_1 = require("@angular/core");
var sort_1 = require("@angular/material/sort");
var paginator_1 = require("@angular/material/paginator");
var table_1 = require("@angular/material/table");
/**
 * @title Table with sorting
 */
var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(_liveAnnouncer) {
        this._liveAnnouncer = _liveAnnouncer;
        this.displayedColumns = [];
    }
    DataTableComponent.prototype.ngOnInit = function () {
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
    };
    DataTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    DataTableComponent.prototype.ngOnChanges = function (changes) {
        if (this.tableData && this.tableData.length > 0) {
            this.displayedColumns = Object.keys(this.tableData[0]);
            //check if we should add actions column 
            if (this.showBtns) {
                this.displayedColumns.push('actions');
            }
        }
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.dataSource = new table_1.MatTableDataSource(this.tableData);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    /** Announce the change in sort state for assistive technology. */
    DataTableComponent.prototype.announceSortChange = function (sortState) {
        // This example uses English messages. If your application supports
        // multiple language, you would internationalize these strings.
        // Furthermore, you can customize the message to add additional
        // details about the values being sorted.
        if (sortState.direction) {
            this._liveAnnouncer.announce("Sorted " + sortState.direction + "ending");
        }
        else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    };
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], DataTableComponent.prototype, "sort");
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], DataTableComponent.prototype, "paginator");
    __decorate([
        core_1.Input()
    ], DataTableComponent.prototype, "tableData");
    __decorate([
        core_1.Input()
    ], DataTableComponent.prototype, "showBtns");
    __decorate([
        core_1.Input()
    ], DataTableComponent.prototype, "deleteEmp");
    DataTableComponent = __decorate([
        core_1.Component({
            selector: 'app-data-table',
            templateUrl: './data-table.component.html',
            styleUrls: ['./data-table.component.css']
        })
    ], DataTableComponent);
    return DataTableComponent;
}());
exports.DataTableComponent = DataTableComponent;
