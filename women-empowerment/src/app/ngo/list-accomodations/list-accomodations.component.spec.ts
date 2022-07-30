import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccomodationsComponent } from './list-accomodations.component';

describe('ListAccomodationsComponent', () => {
  let component: ListAccomodationsComponent;
  let fixture: ComponentFixture<ListAccomodationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAccomodationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAccomodationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
