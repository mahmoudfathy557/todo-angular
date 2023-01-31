"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MatModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
;
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var layout_1 = require("@angular/cdk/layout");
var toolbar_1 = require("@angular/material/toolbar");
var button_1 = require("@angular/material/button");
var sidenav_1 = require("@angular/material/sidenav");
var icon_1 = require("@angular/material/icon");
var list_1 = require("@angular/material/list");
var main_nav_component_1 = require("./main-nav/main-nav.component");
var data_table_component_1 = require("./data-table/data-table.component");
var table_1 = require("@angular/material/table");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var router_1 = require("@angular/router");
var form_component_1 = require("./form/form.component");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var forms_2 = require("@angular/forms");
var routes = [];
var MatModule = /** @class */ (function () {
    function MatModule() {
    }
    MatModule = __decorate([
        core_1.NgModule({
            declarations: [
                main_nav_component_1.MainNavComponent,
                data_table_component_1.DataTableComponent,
                form_component_1.FormComponent
            ],
            imports: [
                router_1.RouterModule.forRoot(routes),
                common_1.CommonModule,
                animations_1.BrowserAnimationsModule,
                layout_1.LayoutModule,
                toolbar_1.MatToolbarModule,
                button_1.MatButtonModule,
                sidenav_1.MatSidenavModule,
                icon_1.MatIconModule,
                list_1.MatListModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                form_field_1.MatFormFieldModule,
                sort_1.MatSortModule,
                forms_2.FormsModule,
                input_1.MatInputModule,
                forms_1.ReactiveFormsModule
            ],
            exports: [
                router_1.RouterModule,
                main_nav_component_1.MainNavComponent,
                data_table_component_1.DataTableComponent,
                form_component_1.FormComponent,
                button_1.MatButtonModule,
            ]
        })
    ], MatModule);
    return MatModule;
}());
exports.MatModule = MatModule;
