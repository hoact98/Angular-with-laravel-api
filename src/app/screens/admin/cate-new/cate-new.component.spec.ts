import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateNewComponent } from './cate-new.component';

describe('CateNewComponent', () => {
  let component: CateNewComponent;
  let fixture: ComponentFixture<CateNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
