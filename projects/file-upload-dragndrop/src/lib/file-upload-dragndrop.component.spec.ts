import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadDragndropComponent } from './file-upload-dragndrop.component';

describe('FileUploadDragndropComponent', () => {
  let component: FileUploadDragndropComponent;
  let fixture: ComponentFixture<FileUploadDragndropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadDragndropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadDragndropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
