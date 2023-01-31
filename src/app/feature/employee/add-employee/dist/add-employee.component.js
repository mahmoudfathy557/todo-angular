"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddEmployeeComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(empService, router, route) {
        this.empService = empService;
        this.router = router;
        this.route = route;
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.route.paramMap.pipe(rxjs_1.switchMap(function (params) {
            console.log(params);
            // this.selectedId = Number(params.get('id'));
            // console.log(this.selectedId);
            return _this.empService.getEmployees();
        }));
    };
    AddEmployeeComponent.prototype.addEmp = function (emp) {
        emp.id = Math.floor(Math.random() * 100) + 3;
        this.empService.addEmp(emp).subscribe(function (response) { return console.log('Success!', response); }, function (error) { return console.error('Error!', error); });
    };
    AddEmployeeComponent.prototype.editEmp = function (emp) {
        this.empService.updateEmp(emp).subscribe(function (emp) { return console.log(emp); });
    };
    AddEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-add-employee',
            templateUrl: './add-employee.component.html',
            styleUrls: ['./add-employee.component.css']
        })
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());
exports.AddEmployeeComponent = AddEmployeeComponent;
