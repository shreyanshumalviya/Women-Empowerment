import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLandingPComponent } from './admin-landing-p.component';

describe('AdminLandingPComponent', () => {
  let component: AdminLandingPComponent;
  let fixture: ComponentFixture<AdminLandingPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLandingPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLandingPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
