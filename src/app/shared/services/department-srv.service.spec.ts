import { TestBed } from '@angular/core/testing';

import { DepartmentSrvService } from './department-srv.service';

describe('DepartmentSrvService', () => {
  let service: DepartmentSrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentSrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
