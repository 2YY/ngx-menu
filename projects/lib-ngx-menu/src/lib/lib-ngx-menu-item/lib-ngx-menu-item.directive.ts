import {Directive, ElementRef, EventEmitter, Output} from '@angular/core';
import {FocusableOption, FocusOrigin} from '@angular/cdk/a11y';

@Directive({
  selector: '[libNgxMenuItem]'
})
export class LibNgxMenuItemDirective implements FocusableOption {

  @Output() focusReceived = new EventEmitter<FocusOrigin>();

  constructor(private elementRef: ElementRef) { }

  focus(origin: FocusOrigin) {
    this.focusReceived.emit(origin);
    this.elementRef.nativeElement.focus();
  }

}
