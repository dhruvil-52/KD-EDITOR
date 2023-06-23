import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPageNumberComponent } from './add-page-number.component';

describe('AddPageNumberComponent', () => {
  let component: AddPageNumberComponent;
  let fixture: ComponentFixture<AddPageNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPageNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPageNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
