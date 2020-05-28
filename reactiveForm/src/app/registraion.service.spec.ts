import { TestBed } from '@angular/core/testing';

import { RegistraionService } from './registraion.service';

describe('RegistraionService', () => {
  let service: RegistraionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistraionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
