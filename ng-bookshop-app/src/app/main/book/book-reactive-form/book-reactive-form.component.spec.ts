import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReactiveFormComponent } from './book-reactive-form.component';

describe('BookReactiveFormComponent', () => {
  let component: BookReactiveFormComponent;
  let fixture: ComponentFixture<BookReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
