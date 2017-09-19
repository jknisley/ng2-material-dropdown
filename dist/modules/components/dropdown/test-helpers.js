import { Component, NgModule } from '@angular/core';
import { Ng2DropdownModule } from '../../ng2-dropdown.module';
var BasicDropdown = (function () {
    function BasicDropdown() {
    }
    BasicDropdown.prototype.ngOnInit = function () { };
    return BasicDropdown;
}());
export { BasicDropdown };
BasicDropdown.decorators = [
    { type: Component, args: [{
                selector: 'basic-dropdown',
                template: "\n        <main>\n        <ng2-dropdown>\n            <ng2-dropdown-button>\n                Open\n            </ng2-dropdown-button>\n            <ng2-dropdown-menu [focusFirstElement]=\"true\">\n                <ng2-menu-item>\n                    First item\n                </ng2-menu-item>\n                <ng2-menu-item [preventClose]=\"true\">\n                    Second item\n                </ng2-menu-item>\n            </ng2-dropdown-menu>\n        </ng2-dropdown>\n        </main>\n    "
            },] },
];
BasicDropdown.ctorParameters = function () { return []; };
var TestModule = (function () {
    function TestModule() {
    }
    return TestModule;
}());
export { TestModule };
TestModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BasicDropdown
                ],
                imports: [Ng2DropdownModule],
                exports: [BasicDropdown]
            },] },
];
TestModule.ctorParameters = function () { return []; };
//# sourceMappingURL=test-helpers.js.map