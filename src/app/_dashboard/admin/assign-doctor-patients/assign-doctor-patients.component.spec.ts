import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDoctorPatientsComponent } from './assign-doctor-patients.component';

describe('AssignDoctorPatientsComponent', () => {
  let component: AssignDoctorPatientsComponent;
  let fixture: ComponentFixture<AssignDoctorPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignDoctorPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignDoctorPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
