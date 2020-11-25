import { NgxMenuItemDirective } from './ngx-menu-item.directive';
import { Component, NgModule, ViewChild } from '@angular/core';
import { NgxMenuModule } from './ngx-menu.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
	selector: 'lib-example',
	template: `
		<p>
			<button id="btn" #btn libNgxMenuItem (focusReceived)="onFocusReceived()">Button</button>
		</p>
	`,
	styles: []
})
class ExampleComponent {
	@ViewChild('btn', {read: NgxMenuItemDirective}) btnRef: NgxMenuItemDirective;

	onFocusReceived(): void {
		// NOTE: noop
	}
}

@NgModule({
	declarations: [ExampleComponent],
	imports: [NgxMenuModule],
	exports: [ExampleComponent]
})
class ExampleModule {}

describe('NgxMenuItemDirective', () => {
	let component: ExampleComponent;
	let fixture: ComponentFixture<ExampleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ExampleComponent],
			imports: [ExampleModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ExampleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should call focusReceived method when focused', () => {
		const spy = spyOn(component, 'onFocusReceived');

		fixture.debugElement.query(By.css('#btn')).injector.get(NgxMenuItemDirective).focus();
		fixture.detectChanges();

		expect(spy).toHaveBeenCalledTimes(1);
	});
});
