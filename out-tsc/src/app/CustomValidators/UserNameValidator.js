var UserNameValidators = /** @class */ (function () {
    function UserNameValidators() {
    }
    UserNameValidators.ShouldBeUnique = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === 'Bilal') {
                    debugger;
                    ~resolve({ shouldBeUnique: true });
                }
                else {
                    resolve(null);
                }
            }, 5000);
        });
    };
    return UserNameValidators;
}());
export { UserNameValidators };
//# sourceMappingURL=UserNameValidator.js.map