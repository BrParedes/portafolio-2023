import { TestBed } from '@angular/core/testing';

import { ScrollrevealService } from './scrollreveal.service';

describe('ScrollrevealService', () => {
  let service: ScrollrevealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollrevealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
