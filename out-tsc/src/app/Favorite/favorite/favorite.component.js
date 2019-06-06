import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var FavoriteComponent = /** @class */ (function () {
    function FavoriteComponent() {
        this.change = new EventEmitter();
    }
    FavoriteComponent.prototype.ngOnInit = function () {
    };
    FavoriteComponent.prototype.onClick = function () {
        this.isSelected = !this.isSelected;
        this.change.emit(this.isSelected);
    };
    tslib_1.__decorate([
        Input('isSelected'),
        tslib_1.__metadata("design:type", Boolean)
    ], FavoriteComponent.prototype, "isSelected", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], FavoriteComponent.prototype, "change", void 0);
    FavoriteComponent = tslib_1.__decorate([
        Component({
            selector: 'app-favorite',
            templateUrl: './favorite.component.html',
            styleUrls: ['./favorite.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FavoriteComponent);
    return FavoriteComponent;
}());
export { FavoriteComponent };
//# sourceMappingURL=favorite.component.js.map