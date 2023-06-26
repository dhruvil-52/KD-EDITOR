import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PngToPdfComponent } from './png-to-pdf.component';

describe('PngToPdfComponent', () => {
  let component: PngToPdfComponent;
  let fixture: ComponentFixture<PngToPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PngToPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PngToPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
