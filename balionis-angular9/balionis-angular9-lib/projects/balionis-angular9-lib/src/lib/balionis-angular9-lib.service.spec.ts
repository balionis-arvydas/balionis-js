import { TestBed } from '@angular/core/testing';

import { BalionisAngular9LibService } from './balionis-angular9-lib.service';

describe('BalionisAngular9LibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BalionisAngular9LibService = TestBed.get(BalionisAngular9LibService);
    expect(service).toBeTruthy();
  });
});
