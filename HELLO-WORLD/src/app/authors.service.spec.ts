import { TestBed } from '@angular/core/testing';

import { AuthorsService } from './authors.service';

describe('CourseTestService', () => {
  let service: AuthorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
