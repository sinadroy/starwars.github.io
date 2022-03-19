import { TestBed } from '@angular/core/testing';

import { ResourcesMenuService } from './resources-menu.service';

describe('ShellMenuService', () => {
  let service: ResourcesMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourcesMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
