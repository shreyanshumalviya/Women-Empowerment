import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSukayaYojanaComponent } from './admin-sukaya-yojana.component';

describe('AdminSukayaYojanaComponent', () => {
  let component: AdminSukayaYojanaComponent;
  let fixture: ComponentFixture<AdminSukayaYojanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSukayaYojanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSukayaYojanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
