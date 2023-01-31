"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmployeeListComponent = void 0;
var core_1 = require("@angular/core");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(empService) {
        var _this = this;
        this.empService = empService;
        // we use arrow fun here to make 'this' point to class 'EmployeeListComponent' => (lifting)
        this.deleteEmp = function (emp) {
            _this.empService.deleteEmp(emp)
                .subscribe(function () { return _this.employees = _this.employees.filter(function (t) { return t.id !== emp.id; }); });
            //  this.employees =  this.employees.filter(e=>e.id !== emp.id)
        };
    }
    EmployeeListComponent.prototype.getEmps = function () {
        var _this = this;
        this.empService.getEmployees()
            .subscribe({
            next: function (employees) {
                _this.employees = employees;
            },
            error: function (error) {
                _this.errorMessage = error.message;
                console.error(error);
            }
        });
    };
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.getEmps();
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-list',
            templateUrl: './employee-list.component.html',
            styleUrls: ['./employee-list.component.css']
        })
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
