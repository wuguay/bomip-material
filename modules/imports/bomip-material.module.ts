import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const isBlank = (obj: any) => obj === undefined || obj === null;

@NgModule({
    declarations: [],
    exports: [],
    imports: [BrowserAnimationsModule, CommonModule]
})
export class BomipMaterialModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: BomipMaterialModule,
            providers: []
        };
    }
}
