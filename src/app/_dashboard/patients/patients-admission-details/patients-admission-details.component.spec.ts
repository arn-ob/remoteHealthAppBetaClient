import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsAdmissionDetailsComponent } from './patients-admission-details.component';

describe('PatientsAdmissionDetailsComponent', () => {
  let component: PatientsAdmissionDetailsComponent;
  let fixture: ComponentFixture<PatientsAdmissionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsAdmissionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsAdmissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
