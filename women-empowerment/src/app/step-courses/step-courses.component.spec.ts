import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCoursesComponent } from './step-courses.component';

describe('StepCoursesComponent', () => {
  let component: StepCoursesComponent;
  let fixture: ComponentFixture<StepCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
