import { TestBed, inject } from '@angular/core/testing';

import { FileUploadDragndropService } from './file-upload-dragndrop.service';

describe('FileUploadDragndropService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileUploadDragndropService]
    });
  });

  it('should be created', inject([FileUploadDragndropService], (service: FileUploadDragndropService) => {
    expect(service).toBeTruthy();
  }));
});
