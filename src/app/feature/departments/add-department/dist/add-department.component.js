"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddDepartmentComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddDepartmentComponent = /** @class */ (function () {
    function AddDepartmentComponent(fb, depService, router, route) {
        this.fb = fb;
        this.depService = depService;
        this.router = router;
        this.route = route;
    }
    AddDepartmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registrationForm = this.fb.group({
            id: [''],
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(1)]],
            manager: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            emps_no: [, [forms_1.Validators.required]]
        });
        var urlId = this.route.snapshot.paramMap.get('id');
        //edit emp
        if (urlId) {
            this.urlId = (urlId);
            this.depService.getDeps()
                .subscribe({
                next: function (deps) {
                    var editedDep = deps.find(function (e) { return Number(e.id) === Number(urlId); });
                    _this.registrationForm.patchValue(editedDep ? editedDep : {});
                },
                error: function (error) {
                    error.message;
                    console.error(error);
                }
            });
        }
    };
    Object.defineProperty(AddDepartmentComponent.prototype, "name", {
        get: function () {
            return this.registrationForm.get('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddDepartmentComponent.prototype, "manager", {
        get: function () {
            return this.registrationForm.get('manager');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddDepartmentComponent.prototype, "emps_no", {
        get: function () {
            return this.registrationForm.get('emps_no');
        },
        enumerable: false,
        configurable: true
    });
    AddDepartmentComponent.prototype.onSubmit = function () {
        // edit emp
        if (this.urlId) {
            // this.editEmp(this.registrationForm.value)
            console.log('edit');
            this.depService.updateDep(this.registrationForm.value).subscribe(function (res) { return console.log(res); });
        }
        else {
            //  add emp
            // this.addEmp(this.registrationForm.value)
            console.log('add ');
            var newDep = __assign(__assign({}, this.registrationForm.value), { id: Math.floor(Math.random() * 100) + 3 });
            this.depService.addDep(newDep).subscribe(function (res) { return console.log(res); });
        }
    };
    AddDepartmentComponent = __decorate([
        core_1.Component({
            selector: 'app-add-department',
            templateUrl: './add-department.component.html',
            styleUrls: ['./add-department.component.css']
        })
    ], AddDepartmentComponent);
    return AddDepartmentComponent;
}());
exports.AddDepartmentComponent = AddDepartmentComponent;
