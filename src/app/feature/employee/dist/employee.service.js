"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmployeeService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:5000/employees';
        // private editedTask: Task
        this.subject = new rxjs_1.Subject(); // observer to receive any update when listening
    }
    // Async call  from a file  
    // of()=>Returns an Observable instance that synchronously delivers the values provided as arguments.
    // getEmployees(): Observable<Employee[]> {
    //  const employees = of(Employees)
    //  return employees
    // }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this.apiUrl);
    };
    EmployeeService.prototype.deleteEmp = function (emp) {
        var url = this.apiUrl + "/" + emp.id;
        return this.http["delete"](url);
    };
    EmployeeService.prototype.addEmp = function (emp) {
        console.log(emp);
        return this.http.post(this.apiUrl, emp, httpOptions);
    };
    EmployeeService.prototype.updateEmp = function (emp) {
        var url = this.apiUrl + "/" + emp.id;
        return this.http.put(url, emp, httpOptions);
    };
    EmployeeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
