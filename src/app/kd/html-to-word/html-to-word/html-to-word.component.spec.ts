import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlToWordComponent } from './html-to-word.component';

describe('HtmlToWordComponent', () => {
  let component: HtmlToWordComponent;
  let fixture: ComponentFixture<HtmlToWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlToWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlToWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
