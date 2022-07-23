import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoLoginComponent } from './ngo-login.component';

describe('NgoLoginComponent', () => {
  let component: NgoLoginComponent;
  let fixture: ComponentFixture<NgoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
