import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFileUploadComponent } from './mat-file-upload.component';

describe('MatFileUploadComponent', () => {
  let component: MatFileUploadComponent;
  let fixture: ComponentFixture<MatFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFileUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
