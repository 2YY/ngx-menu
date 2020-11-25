import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';
import { FocusableOption, FocusOrigin } from '@angular/cdk/a11y';

@Directive({
	selector: '[libNgxMenuItem]',
})
export class NgxMenuItemDirective implements FocusableOption {
	@Output() focusReceived = new EventEmitter<FocusOrigin>();

	constructor(private elementRef: ElementRef) {}

	focus(origin?: FocusOrigin): void {
		this.focusReceived.emit(origin);
		this.elementRef.nativeElement.focus();
	}
}
