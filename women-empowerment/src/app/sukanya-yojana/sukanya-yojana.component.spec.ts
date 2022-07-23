import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukanyaYojanaComponent } from './sukanya-yojana.component';

describe('SukanyaYojanaComponent', () => {
  let component: SukanyaYojanaComponent;
  let fixture: ComponentFixture<SukanyaYojanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SukanyaYojanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SukanyaYojanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
