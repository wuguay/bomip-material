import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export var isBlank = function (obj) { return obj === undefined || obj === null; };
var BomipMaterialModule = /** @class */ (function () {
    function BomipMaterialModule() {
    }
    BomipMaterialModule_1 = BomipMaterialModule;
    BomipMaterialModule.forRoot = function () {
        return {
            ngModule: BomipMaterialModule_1,
            providers: []
        };
    };
    BomipMaterialModule = BomipMaterialModule_1 = __decorate([
        NgModule({
            declarations: [],
            exports: [],
            imports: [BrowserAnimationsModule, CommonModule]
        })
    ], BomipMaterialModule);
    return BomipMaterialModule;
    var BomipMaterialModule_1;
}());
export { BomipMaterialModule };
//# sourceMappingURL=bomip-material.module.js.map