import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBgFromJpgComponent } from './remove-bg-from-jpg.component';

describe('RemoveBgFromJpgComponent', () => {
  let component: RemoveBgFromJpgComponent;
  let fixture: ComponentFixture<RemoveBgFromJpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveBgFromJpgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveBgFromJpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
