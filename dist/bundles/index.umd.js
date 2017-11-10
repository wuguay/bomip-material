(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser/animations')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/platform-browser/animations'], factory) :
	(factory((global.bp = global.bp || {}, global.bp.material = {}),global.core,global.common,global.animations));
}(this, (function (exports,core,common,animations) { 'use strict';

var isBlank = function (obj) { return obj === undefined || obj === null; };
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
        core.NgModule({
            declarations: [],
            exports: [],
            imports: [animations.BrowserAnimationsModule, common.CommonModule]
        })
    ], BomipMaterialModule);
    return BomipMaterialModule;
    var BomipMaterialModule_1;
}());

exports.isBlank = isBlank;
exports.BomipMaterialModule = BomipMaterialModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
