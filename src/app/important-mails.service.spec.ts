import { TestBed } from '@angular/core/testing';

import { ImportantMailsService } from './important-mails.service';

describe('ImportantMailsService', () => {
  let service: ImportantMailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportantMailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
