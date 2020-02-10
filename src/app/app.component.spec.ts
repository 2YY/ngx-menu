import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {OverlayModule} from '@angular/cdk/overlay';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        OverlayModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

});
