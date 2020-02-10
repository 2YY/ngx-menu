import {AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {TemplatePortal} from '@angular/cdk/portal';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {Subscription} from 'rxjs';
import {LibNgxMenuComponent} from '../../projects/lib-ngx-menu/src/lib/lib-ngx-menu.component';
import {FocusOrigin} from '@angular/cdk/a11y';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('menuPopup') menuPopupRef: TemplateRef<any>;
  @ViewChild('menuPopupBody', {read: LibNgxMenuComponent}) menuPopupBodyRef: LibNgxMenuComponent;

  menuPopupPortal: TemplatePortal;
  menuPopupOverlayConfig: OverlayConfig = {
    hasBackdrop: true
  };
  menuPopupOverlayRef: OverlayRef;
  menuPopupBackdropClickSubscription: Subscription;
  menuPopupLastOrigin: FocusOrigin = null;

  ratingPoints: number | null = null;
  ratingPointsMax = 5;
  ratingLabels: string[] = ['not quite', 'little more', 'hmm...', 'like', 'love!'];

  constructor(
    private viewContainerRef: ViewContainerRef,
    private overlay: Overlay
  ) {}

  ngOnInit(): void {
    this.menuPopupOverlayRef = this.overlay.create(this.menuPopupOverlayConfig);
    this.menuPopupBackdropClickSubscription = this.menuPopupOverlayRef.backdropClick().subscribe(() => this.hideMenu());
  }

  ngOnDestroy() {
    this.menuPopupBackdropClickSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.menuPopupPortal = new TemplatePortal(this.menuPopupRef, this.viewContainerRef);
  }

  showMenu() {
    this.menuPopupOverlayRef.attach(this.menuPopupPortal);
    setTimeout(() => {
      this.menuPopupBodyRef.focusKeyManagerMenuItems.setFocusOrigin('program');
      this.menuPopupBodyRef.focusKeyManagerMenuItems.setFirstItemActive();
      this.menuPopupBodyRef.focusKeyManagerMenuItems.setFocusOrigin('keyboard');
    }, 1);
  }

  hideMenu() {
    this.menuPopupOverlayRef.detach();
  }

  rate(points: number) {
    this.ratingPoints = points;
    this.hideMenu();
  }

  getArrayForRenderingRating() {
    return new Array(this.ratingPointsMax);
  }

}
