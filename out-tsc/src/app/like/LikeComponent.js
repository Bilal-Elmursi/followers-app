import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_Likecount, _IsSelected) {
        this._Likecount = _Likecount;
        this._IsSelected = _IsSelected;
    }
    LikeComponent.prototype.OnClick = function () {
        this._Likecount += (this._IsSelected) ? -1 : +1;
        this._IsSelected = !this._IsSelected;
    };
    Object.defineProperty(LikeComponent.prototype, "Likecount", {
        get: function () {
            return this._Likecount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "IsSelected", {
        get: function () {
            return this._IsSelected;
        },
        enumerable: true,
        configurable: true
    });
    LikeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-Like',
            template: "",
            styles: [""]
        }),
        tslib_1.__metadata("design:paramtypes", [Number, Boolean])
    ], LikeComponent);
    return LikeComponent;
}());
export { LikeComponent };
//# sourceMappingURL=LikeComponent.js.map