import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserNameValidators } from '../CustomValidators/UserNameValidator';
var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent() {
        this.form = new FormGroup({
            username: new FormControl('', [
                // Validators.required,
                // Validators.minLength(3),
                UserNameValidators.ShouldBeUnique
            ]),
            password: new FormControl('', [
                Validators.required,
                UserNameValidators.ShouldBeUnique
                // Validators.minLength(3)
            ]),
        });
    }
    Object.defineProperty(SignupFormComponent.prototype, "username", {
        get: function () {
            console.log(this.form.get('username'));
            return this.form.get('username');
        },
        enumerable: true,
        configurable: true
    });
    SignupFormComponent = tslib_1.__decorate([
        Component({
            selector: 'signup-form',
            templateUrl: './signup-form.component.html',
            styleUrls: ['./signup-form.component.css']
        })
    ], SignupFormComponent);
    return SignupFormComponent;
}());
export { SignupFormComponent };
//# sourceMappingURL=signup-form.component.js.map