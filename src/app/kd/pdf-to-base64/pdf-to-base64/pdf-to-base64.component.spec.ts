import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfToBase64Component } from './pdf-to-base64.component';

describe('PdfToBase64Component', () => {
  let component: PdfToBase64Component;
  let fixture: ComponentFixture<PdfToBase64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfToBase64Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfToBase64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
