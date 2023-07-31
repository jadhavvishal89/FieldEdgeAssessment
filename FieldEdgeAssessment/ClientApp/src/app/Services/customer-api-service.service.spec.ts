import { TestBed } from '@angular/core/testing';

import { CustomerApiServiceService } from './customer-api-service.service';

describe('CustomerApiServiceService', () => {
  let service: CustomerApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
