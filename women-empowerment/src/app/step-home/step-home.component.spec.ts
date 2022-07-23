import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepHomeComponent } from './step-home.component';

describe('StepHomeComponent', () => {
  let component: StepHomeComponent;
  let fixture: ComponentFixture<StepHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
