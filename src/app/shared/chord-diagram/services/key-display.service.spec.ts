import { TestBed } from '@angular/core/testing';

import { KeyDisplayService } from './key-display.service';

describe('KeyDisplayService', () => {
  let service: KeyDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
