import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsAndResortsComponent } from './hotels-and-resorts.component';

describe('HotelsAndResortsComponent', () => {
  let component: HotelsAndResortsComponent;
  let fixture: ComponentFixture<HotelsAndResortsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelsAndResortsComponent]
    });
    fixture = TestBed.createComponent(HotelsAndResortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
