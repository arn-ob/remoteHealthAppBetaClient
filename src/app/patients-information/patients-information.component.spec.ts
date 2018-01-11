import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsInformationComponent } from './patients-information.component';

describe('PatientsInformationComponent', () => {
  let component: PatientsInformationComponent;
  let fixture: ComponentFixture<PatientsInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
