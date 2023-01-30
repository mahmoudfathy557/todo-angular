"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormComponent = /** @class */ (function () {
    function FormComponent(fb, empService) {
        this.fb = fb;
        this.empService = empService;
    }
    FormComponent.prototype.ngOnInit = function () {
        this.registrationForm = this.fb.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            lastName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            age: [0, [forms_1.Validators.required]],
            hiredAt: ['', [forms_1.Validators.required]]
        });
    };
    Object.defineProperty(FormComponent.prototype, "firstName", {
        get: function () {
            return this.registrationForm.get('firstName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "lastName", {
        get: function () {
            return this.registrationForm.get('lastName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "age", {
        get: function () {
            return this.registrationForm.get('age');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "hiredAt", {
        get: function () {
            return this.registrationForm.get('hiredAt');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "email", {
        get: function () {
            return this.registrationForm.get('email');
        },
        enumerable: false,
        configurable: true
    });
    FormComponent.prototype.onSubmit = function () {
        this.addEmp(this.registrationForm.value);
    };
    __decorate([
        core_1.Input()
    ], FormComponent.prototype, "addEmp");
    FormComponent = __decorate([
        core_1.Component({
            selector: 'app-form',
            templateUrl: './form.component.html',
            styleUrls: ['./form.component.css']
        })
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;