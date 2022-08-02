import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Accomodation_status } from 'src/app/models/accomodation-status';
import { AccomodationStatusComponent } from './accomodation-status.component';





describe('ListAccomodationComponent', () => {
  let component: AccomodationStatusComponent;
  let fixture: ComponentFixture<AccomodationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomodationStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomodationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});