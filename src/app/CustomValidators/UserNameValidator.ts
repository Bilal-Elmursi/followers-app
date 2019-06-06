import { Component, Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn, ValidationErrors, AsyncValidatorFn } from '@angular/forms';


export class UserNameValidators {
    constructor() {
    }


    static ShouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null>{

         var promise = new Promise((resolve,reject ) => {
            setTimeout(() => {
                debugger;
                if (control.value === "Bilal") {
                    debugger;
                    resolve({ _shouldBeUnique : true });
                } else {
                    resolve(null);
                }

            }, 5000);
        })
        return promise;
    }
}