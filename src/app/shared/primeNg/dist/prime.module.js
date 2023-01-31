"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PrimeModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var table_1 = require("primeng/table");
var button_1 = require("primeng/button");
var inputtext_1 = require("primeng/inputtext");
var PrimeModule = /** @class */ (function () {
    function PrimeModule() {
    }
    PrimeModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                table_1.TableModule,
                button_1.ButtonModule,
                inputtext_1.InputTextModule
            ],
            exports: [
                table_1.TableModule,
                button_1.ButtonModule,
                inputtext_1.InputTextModule
            ]
        })
    ], PrimeModule);
    return PrimeModule;
}());
exports.PrimeModule = PrimeModule;
