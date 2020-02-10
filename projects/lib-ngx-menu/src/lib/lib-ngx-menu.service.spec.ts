import { TestBed } from '@angular/core/testing';

import { LibNgxMenuService } from './lib-ngx-menu.service';

describe('LibNgxMenuService', () => {
  let service: LibNgxMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibNgxMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
