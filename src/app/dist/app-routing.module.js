"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var add_employee_component_1 = require("./feature/employee/add-employee/add-employee.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_not_fpund_component_1 = require("./components/page-not-fpund/page-not-fpund.component");
var employee_list_component_1 = require("./feature/employee/employee-list/employee-list.component");
var routes = [
    { path: '', component: employee_list_component_1.EmployeeListComponent },
    // { path: '', redirectTo: 'tasks', pathMatch: 'full' }, //default router
    { path: 'add-emp', component: add_employee_component_1.AddEmployeeComponent },
    { path: 'edit-emp/:id', component: add_employee_component_1.AddEmployeeComponent },
    { path: '**', component: page_not_fpund_component_1.PageNotFpundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
