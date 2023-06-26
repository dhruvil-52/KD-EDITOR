import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpgToPdfComponent } from './jpg-to-pdf.component';

describe('JpgToPdfComponent', () => {
  let component: JpgToPdfComponent;
  let fixture: ComponentFixture<JpgToPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JpgToPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JpgToPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
