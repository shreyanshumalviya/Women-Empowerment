import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginAndRegisterComponent } from './user-login-and-register.component';

describe('UserLoginAndRegisterComponent', () => {
  let component: UserLoginAndRegisterComponent;
  let fixture: ComponentFixture<UserLoginAndRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginAndRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginAndRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
