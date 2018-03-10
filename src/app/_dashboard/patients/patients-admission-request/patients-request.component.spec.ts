import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsRequestComponent } from './patients-request.component';

describe('PatientsRequestComponent', () => {
  let component: PatientsRequestComponent;
  let fixture: ComponentFixture<PatientsRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
