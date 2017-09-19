import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Ng2Dropdown } from './ng2-dropdown';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { TestModule, BasicDropdown } from './test-helpers';
function getComponent(fixture, component) {
    fixture.detectChanges();
    return fixture.debugElement.query(By.directive(component)).componentInstance;
}
describe('Ng2Dropdown', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [BrowserModule, NoopAnimationsModule, TestModule]
        });
    });
    describe('when the controller is instantiated', function () {
        it('has its properties defined', function () {
            var fixture = TestBed.createComponent(BasicDropdown);
            var component = getComponent(fixture, Ng2Dropdown);
            expect(component.button).toBeDefined();
            expect(component.menu).toBeDefined();
            expect(component.menu.items.length).toEqual(2);
            expect(component.state.menuState.isVisible).toBe(false);
        });
        it('shows/hides dropdown menu', function () {
            var fixture = TestBed.createComponent(BasicDropdown);
            var component = getComponent(fixture, Ng2Dropdown);
            component.button.toggleMenu();
            expect(component.state.menuState.isVisible).toEqual(true);
            component.button.toggleMenu();
            expect(component.state.menuState.isVisible).toEqual(false);
        });
    });
    describe('when using keyboard keys', function () {
        var keyUp = new Event('keyup');
        var keyDown = new Event('keydown');
        var enter = new Event('enter');
        var tab = new Event('tab');
        keyUp['keyCode'] = 38;
        keyDown['keyCode'] = 40;
        enter['keyCode'] = 13;
        tab['keyCode'] = 9;
        it('goes through the dropdown items', fakeAsync(function () {
            var fixture = TestBed.createComponent(BasicDropdown);
            var component = getComponent(fixture, Ng2Dropdown);
            component.show();
            fixture.detectChanges();
            tick();
            expect(component.state.dropdownState.selectedItem).toBe(component.menu.items.toArray()[0]);
            component.menu.handleKeypress(keyDown);
            fixture.detectChanges();
            tick();
            expect(component.state.dropdownState.selectedItem).toBe(component.menu.items.toArray()[1]);
            component.menu.handleKeypress(keyUp);
            expect(component.state.dropdownState.selectedItem).toBe(component.menu.items.toArray()[0]);
            component.menu.handleKeypress(tab);
            expect(component.state.dropdownState.selectedItem).toBe(component.menu.items.toArray()[1]);
        }));
        it('fires click event when pressing enter', fakeAsync(function () {
            var fixture = TestBed.createComponent(BasicDropdown);
            var component = getComponent(fixture, Ng2Dropdown);
            component.show();
            component.menu.handleKeypress(keyDown);
            expect(component.state.dropdownState.selectedItem).toBe(component.menu.items.toArray()[1]);
            component.menu.handleKeypress(enter);
            expect(component.state.menuState.isVisible).toEqual(true);
        }));
    });
});
//# sourceMappingURL=ng2-dropdown.spec.js.map