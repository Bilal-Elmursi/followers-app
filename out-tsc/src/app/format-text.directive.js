import * as tslib_1 from "tslib";
import { Directive, HostListener, ElementRef, Input } from '@angular/core';
var FormatTextDirective = /** @class */ (function () {
    function FormatTextDirective(el) {
        this.el = el;
    }
    FormatTextDirective.prototype.onBlur = function () {
        var val = this.el.nativeElement.value;
        if (this.format == 'upper') {
            this.el.nativeElement.value = val.toLocaleUpperCase();
        }
        else {
            this.el.nativeElement.value = val.toLocaleLowerCase();
        }
    };
    tslib_1.__decorate([
        Input('appFormatText'),
        tslib_1.__metadata("design:type", Object)
    ], FormatTextDirective.prototype, "format", void 0);
    tslib_1.__decorate([
        HostListener('blur'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], FormatTextDirective.prototype, "onBlur", null);
    FormatTextDirective = tslib_1.__decorate([
        Directive({
            selector: '[appFormatText]'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef])
    ], FormatTextDirective);
    return FormatTextDirective;
}());
export { FormatTextDirective };
//# sourceMappingURL=format-text.directive.js.map