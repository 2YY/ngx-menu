import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibNgxMenuComponent } from './lib-ngx-menu.component';

describe('LibNgxMenuComponent', () => {
  let component: LibNgxMenuComponent;
  let fixture: ComponentFixture<LibNgxMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibNgxMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibNgxMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
