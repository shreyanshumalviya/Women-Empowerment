import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccomodationsComponent } from './admin-accomodations.component';

describe('AdminAccomodationsComponent', () => {
  let component: AdminAccomodationsComponent;
  let fixture: ComponentFixture<AdminAccomodationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAccomodationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccomodationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
