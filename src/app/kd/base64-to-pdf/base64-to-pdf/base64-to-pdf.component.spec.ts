import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64ToPdfComponent } from './base64-to-pdf.component';

describe('Base64ToPdfComponent', () => {
  let component: Base64ToPdfComponent;
  let fixture: ComponentFixture<Base64ToPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Base64ToPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Base64ToPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
