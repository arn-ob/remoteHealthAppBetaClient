import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsCheckupDetailsComponent } from './patients-checkup-details.component';

describe('PatientsCheckupDetailsComponent', () => {
  let component: PatientsCheckupDetailsComponent;
  let fixture: ComponentFixture<PatientsCheckupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsCheckupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsCheckupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
