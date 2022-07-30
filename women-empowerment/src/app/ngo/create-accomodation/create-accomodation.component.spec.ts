import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccomodationComponent } from './create-accomodation.component';

describe('CreateAccomodationComponent', () => {
  let component: CreateAccomodationComponent;
  let fixture: ComponentFixture<CreateAccomodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccomodationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
