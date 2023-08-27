import { TestBed } from '@angular/core/testing';

import { fileService } from './file.service';

describe('FileService', () => {
  let service: fileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(fileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
