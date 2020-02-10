import { NgModule } from '@angular/core';
import { LibNgxMenuComponent } from './lib-ngx-menu.component';
import {A11yModule} from '@angular/cdk/a11y';
import {LibNgxMenuItemDirective} from './lib-ngx-menu-item/lib-ngx-menu-item.directive';



@NgModule({
  declarations: [
    LibNgxMenuComponent,
    LibNgxMenuItemDirective
  ],
  imports: [
    A11yModule
  ],
  exports: [
    LibNgxMenuComponent,
    LibNgxMenuItemDirective
  ]
})
export class LibNgxMenuModule { }
