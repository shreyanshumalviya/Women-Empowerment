import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislationandpolicyComponent } from './legislationandpolicy.component';

describe('LegislationandpolicyComponent', () => {
  let component: LegislationandpolicyComponent;
  let fixture: ComponentFixture<LegislationandpolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegislationandpolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegislationandpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
