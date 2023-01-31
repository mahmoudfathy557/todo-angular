"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmployeeModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var employee_list_component_1 = require("./employee-list/employee-list.component");
var mat_module_1 = require("src/app/shared/mat/mat.module");
var add_employee_component_1 = require("./add-employee/add-employee.component");
var forms_1 = require("@angular/forms");
var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = __decorate([
        core_1.NgModule({
            declarations: [
                employee_list_component_1.EmployeeListComponent,
                add_employee_component_1.AddEmployeeComponent
            ],
            imports: [
                common_1.CommonModule,
                mat_module_1.MatModule,
                forms_1.ReactiveFormsModule
            ],
            exports: [
                employee_list_component_1.EmployeeListComponent
            ]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());
exports.EmployeeModule = EmployeeModule;
