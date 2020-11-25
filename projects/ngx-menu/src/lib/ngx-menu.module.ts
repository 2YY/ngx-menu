import { NgModule } from '@angular/core';
import { NgxMenuComponent } from './ngx-menu.component';
import { NgxMenuItemDirective } from './ngx-menu-item.directive';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
	declarations: [NgxMenuComponent, NgxMenuItemDirective],
	imports: [A11yModule],
	exports: [NgxMenuComponent, NgxMenuItemDirective],
})
export class NgxMenuModule {}
