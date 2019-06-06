import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './Favorite/favorite/favorite.component';
import { PanelComponent } from './Panel/panel/panel.component';
import { NavigationComponent } from './Navigation/navigation/navigation.component';
import { FormatTextDirective } from './format-text.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                FavoriteComponent,
                PanelComponent,
                NavigationComponent,
                FormatTextDirective,
                ContactFormComponent,
                SignupFormComponent
            ],
            imports: [
                BrowserModule,
                ReactiveFormsModule,
                FormsModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map