import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoConatinerComponent } from './ngo-conatiner.component';

describe('NgoConatinerComponent', () => {
  let component: NgoConatinerComponent;
  let fixture: ComponentFixture<NgoConatinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoConatinerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoConatinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
