import { TestBed } from '@angular/core/testing';

import { QuestApiService } from './quest-api.service';

describe('QuestApiService', () => {
  let service: QuestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
