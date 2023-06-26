import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordToHtmlComponent } from './word-to-html.component';

describe('WordToHtmlComponent', () => {
  let component: WordToHtmlComponent;
  let fixture: ComponentFixture<WordToHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordToHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordToHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
