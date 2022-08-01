import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationStatusComponent } from './accomodation-status.component';

describe('AccomodationStatusComponent', () => {
  let component: AccomodationStatusComponent;
  let fixture: ComponentFixture<AccomodationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomodationStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomodationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
