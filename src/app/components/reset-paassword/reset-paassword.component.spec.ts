import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPaasswordComponent } from './reset-paassword.component';

describe('ResetPaasswordComponent', () => {
  let component: ResetPaasswordComponent;
  let fixture: ComponentFixture<ResetPaasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPaasswordComponent]
    });
    fixture = TestBed.createComponent(ResetPaasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
