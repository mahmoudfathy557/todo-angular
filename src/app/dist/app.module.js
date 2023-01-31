"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var employee_module_1 = require("./feature/employee/employee.module");
var mat_module_1 = require("./shared/mat/mat.module");
var page_not_found_component_1 = require("./shared/page-not-found/page-not-found.component");
var prime_module_1 = require("./shared/primeNg/prime.module");
var home_component_1 = require("./feature/home/home.component");
var home_module_1 = require("./feature/home/home.module");
var departments_list_component_1 = require("./feature/departments/departments-list/departments-list.component");
var departments_module_1 = require("./feature/departments/departments.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, page_not_found_component_1.PageNotFoundComponent, home_component_1.HomeComponent, departments_list_component_1.DepartmentsListComponent],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                angular_fontawesome_1.FontAwesomeModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                mat_module_1.MatModule,
                employee_module_1.EmployeeModule,
                departments_module_1.DepartmentsModule,
                forms_1.ReactiveFormsModule,
                prime_module_1.PrimeModule,
                home_module_1.HomeModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
