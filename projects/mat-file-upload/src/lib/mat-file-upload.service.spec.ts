import { TestBed } from '@angular/core/testing';

import { MatFileUploadService } from './mat-file-upload.service';

describe('MatFileUploadService', () => {
  let service: MatFileUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatFileUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
