import { TestBed } from '@angular/core/testing';

import { ShellMenuService } from './shell-menu.service';

describe('ShellMenuService', () => {
  let service: ShellMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShellMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
