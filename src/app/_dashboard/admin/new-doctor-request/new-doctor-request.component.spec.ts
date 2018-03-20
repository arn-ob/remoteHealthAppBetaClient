import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDoctorRequestComponent } from './new-doctor-request.component';

describe('NewDoctorRequestComponent', () => {
  let component: NewDoctorRequestComponent;
  let fixture: ComponentFixture<NewDoctorRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDoctorRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDoctorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
