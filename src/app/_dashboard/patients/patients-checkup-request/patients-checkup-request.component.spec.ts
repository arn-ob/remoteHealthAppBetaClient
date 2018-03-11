import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsCheckupRequestComponent } from './patients-checkup-request.component';

describe('PatientsCheckupRequestComponent', () => {
  let component: PatientsCheckupRequestComponent;
  let fixture: ComponentFixture<PatientsCheckupRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsCheckupRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsCheckupRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
