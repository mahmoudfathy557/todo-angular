"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DepartmentsListComponent = void 0;
var core_1 = require("@angular/core");
var DepartmentsListComponent = /** @class */ (function () {
    function DepartmentsListComponent(depService) {
        this.depService = depService;
    }
    DepartmentsListComponent.prototype.getDeps = function () {
        var _this = this;
        this.depService.getDeps().subscribe(function (deps) { return _this.deps = deps; });
    };
    DepartmentsListComponent.prototype.ngOnInit = function () {
        // this.productService.getProductsSmall().then(data => this.products = data);
        this.getDeps();
        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'name', header: 'Name' },
            { field: 'manager', header: 'Manager' },
            { field: 'emps_no', header: 'Employees No' },
            { field: 'actions', header: 'Actions' },
        ];
    };
    DepartmentsListComponent.prototype.deleteDep = function (dep) {
        var _this = this;
        this.depService.deleteDep(dep).subscribe(function (res) { return _this.getDeps(); });
    };
    DepartmentsListComponent = __decorate([
        core_1.Component({
            selector: 'app-departments-list',
            templateUrl: './departments-list.component.html',
            styles: [
                '.card { width: 70% }'
            ]
        })
    ], DepartmentsListComponent);
    return DepartmentsListComponent;
}());
exports.DepartmentsListComponent = DepartmentsListComponent;
