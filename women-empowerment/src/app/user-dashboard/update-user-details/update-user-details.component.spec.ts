import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserDetailsComponent } from './update-user-details.component';

describe('UpdateUserDetailsComponent', () => {
  let component: UpdateUserDetailsComponent;
  let fixture: ComponentFixture<UpdateUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
