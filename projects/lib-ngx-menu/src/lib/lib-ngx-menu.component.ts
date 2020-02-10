import {AfterViewInit, Component, ContentChildren, QueryList} from '@angular/core';
import {FocusKeyManager} from '@angular/cdk/a11y';
import {LibNgxMenuItemDirective} from './lib-ngx-menu-item/lib-ngx-menu-item.directive';

@Component({
  selector: 'lib-ngx-menu',
  templateUrl: './lib-ngx-menu.component.html',
  styleUrls: ['./lib-ngx-menu.component.scss']
})
export class LibNgxMenuComponent implements AfterViewInit {

  @ContentChildren(LibNgxMenuItemDirective, {read: LibNgxMenuItemDirective}) menuItemsRef: QueryList<LibNgxMenuItemDirective>;
  focusKeyManagerMenuItems: FocusKeyManager<LibNgxMenuItemDirective>;

  ngAfterViewInit(): void {
    this.focusKeyManagerMenuItems = new FocusKeyManager<LibNgxMenuItemDirective>(this.menuItemsRef).withWrap();
  }

}
