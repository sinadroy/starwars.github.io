import { TestBed } from '@angular/core/testing';

import { ResourcesFilmsService } from './resources-films.service';

describe('ResourcesFilmsService', () => {
  let service: ResourcesFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourcesFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
