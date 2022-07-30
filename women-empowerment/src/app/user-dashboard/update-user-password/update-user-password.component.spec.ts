import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserPasswordComponent } from './update-user-password.component';

describe('UpdateUserPasswordComponent', () => {
  let component: UpdateUserPasswordComponent;
  let fixture: ComponentFixture<UpdateUserPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
