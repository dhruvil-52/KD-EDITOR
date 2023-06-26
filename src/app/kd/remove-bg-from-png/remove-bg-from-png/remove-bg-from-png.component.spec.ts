import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBgFromPngComponent } from './remove-bg-from-png.component';

describe('RemoveBgFromPngComponent', () => {
  let component: RemoveBgFromPngComponent;
  let fixture: ComponentFixture<RemoveBgFromPngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveBgFromPngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveBgFromPngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
