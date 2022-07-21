import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStepComponent } from './admin-step.component';

describe('AdminStepComponent', () => {
  let component: AdminStepComponent;
  let fixture: ComponentFixture<AdminStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
