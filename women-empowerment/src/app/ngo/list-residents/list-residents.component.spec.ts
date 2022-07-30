import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResidentsComponent } from './list-residents.component';

describe('ListResidentsComponent', () => {
  let component: ListResidentsComponent;
  let fixture: ComponentFixture<ListResidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListResidentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
