import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoHomeComponent } from './ngo-home.component';

describe('NgoHomeComponent', () => {
  let component: NgoHomeComponent;
  let fixture: ComponentFixture<NgoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
