import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCateComponent } from './book-cate.component';

describe('BookCateComponent', () => {
  let component: BookCateComponent;
  let fixture: ComponentFixture<BookCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
