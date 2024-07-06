import { TestBed } from '@angular/core/testing';

import { PunishApiService } from './punish-api.service';

describe('PunishApiService', () => {
  let service: PunishApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PunishApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
