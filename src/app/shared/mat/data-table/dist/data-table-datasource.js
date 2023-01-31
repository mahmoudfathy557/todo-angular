"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.DataTableDataSource = void 0;
var collections_1 = require("@angular/cdk/collections");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
// TODO: replace this with real data from your application
// const EXAMPLE_DATA: DataTableItem[] = [
//   {id: 1, name: 'Hydrogen'},
//   {id: 2, name: 'Helium'},
//   {id: 3, name: 'Lithium'},
//   {id: 4, name: 'Beryllium'},
//   {id: 5, name: 'Boron'},
//   {id: 6, name: 'Carbon'},
//   {id: 7, name: 'Nitrogen'},
//   {id: 8, name: 'Oxygen'},
//   {id: 9, name: 'Fluorine'},
//   {id: 10, name: 'Neon'},
//   {id: 11, name: 'Sodium'},
//   {id: 12, name: 'Magnesium'},
//   {id: 13, name: 'Aluminum'},
//   {id: 14, name: 'Silicon'},
//   {id: 15, name: 'Phosphorus'},
//   {id: 16, name: 'Sulfur'},
//   {id: 17, name: 'Chlorine'},
//   {id: 18, name: 'Argon'},
//   {id: 19, name: 'Potassium'},
//   {id: 20, name: 'Calcium'},
// ];
/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
var DataTableDataSource = /** @class */ (function (_super) {
    __extends(DataTableDataSource, _super);
    function DataTableDataSource() {
        var _this = _super.call(this) || this;
        _this.data = [];
        return _this;
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    DataTableDataSource.prototype.connect = function () {
        var _this = this;
        if (this.paginator && this.sort) {
            // Combine everything that affects the rendered data into one update
            // stream for the data-table to consume.
            return rxjs_1.merge(rxjs_1.of(this.data), this.paginator.page, this.sort.sortChange)
                .pipe(operators_1.map(function (d) {
                return _this.getPagedData(_this.getSortedData(__spreadArrays(_this.data)));
            }));
        }
        else {
            throw Error('Please set the paginator and sort on the data source before connecting.');
        }
    };
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    DataTableDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    DataTableDataSource.prototype.getPagedData = function (data) {
        if (this.paginator) {
            var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.splice(startIndex, this.paginator.pageSize);
        }
        else {
            return data;
        }
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    DataTableDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort || !this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var _a, _b, _c;
            var isAsc = ((_a = _this.sort) === null || _a === void 0 ? void 0 : _a.direction) === 'asc';
            // sorting data dynamically
            var tableDataColsHeaders = {};
            (_b = _this.sort) === null || _b === void 0 ? void 0 : _b.sortables.forEach(function (res) {
                tableDataColsHeaders[res.id] = res.id;
            });
            tableDataColsHeaders['default'] = 0;
            var searchKey = (_c = _this.sort) === null || _c === void 0 ? void 0 : _c.active;
            return compare(a[tableDataColsHeaders[searchKey ? searchKey : 'default']], b[tableDataColsHeaders[searchKey ? searchKey : 'default']], isAsc);
        });
    };
    return DataTableDataSource;
}(collections_1.DataSource));
exports.DataTableDataSource = DataTableDataSource;
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
