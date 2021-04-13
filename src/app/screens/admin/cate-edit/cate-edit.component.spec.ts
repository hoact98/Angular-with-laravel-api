import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateEditComponent } from './cate-edit.component';

describe('CateEditComponent', () => {
  let component: CateEditComponent;
  let fixture: ComponentFixture<CateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
