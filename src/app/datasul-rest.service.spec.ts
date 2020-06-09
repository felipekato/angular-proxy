import { TestBed } from '@angular/core/testing';

import { DatasulRestService } from './datasul-rest.service';

describe('DatasulRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatasulRestService = TestBed.get(DatasulRestService);
    expect(service).toBeTruthy();
  });
});
