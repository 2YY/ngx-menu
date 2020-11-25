import { AfterViewInit, Component, ContentChildren, QueryList } from '@angular/core';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { NgxMenuItemDirective } from './ngx-menu-item.directive';

@Component({
	selector: 'lib-ngx-menu',
	templateUrl: './ngx-menu.component.html',
	styleUrls: ['./ngx-menu.component.scss'],
})
export class NgxMenuComponent implements AfterViewInit {

	@ContentChildren(NgxMenuItemDirective, {read: NgxMenuItemDirective}) menuItemsRef: QueryList<NgxMenuItemDirective>;
	focusKeyManagerMenuItems: FocusKeyManager<NgxMenuItemDirective>;

	ngAfterViewInit(): void {
		this.focusKeyManagerMenuItems = new FocusKeyManager<NgxMenuItemDirective>(this.menuItemsRef).withWrap();
	}

}
