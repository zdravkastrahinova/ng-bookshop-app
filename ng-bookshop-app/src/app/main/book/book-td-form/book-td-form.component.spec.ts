import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTdFormComponent } from './book-td-form.component';

describe('BookTdFormComponent', () => {
  let component: BookTdFormComponent;
  let fixture: ComponentFixture<BookTdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTdFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
