import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPatientsRequestComponent } from './new-patients-request.component';

describe('NewPatientsRequestComponent', () => {
  let component: NewPatientsRequestComponent;
  let fixture: ComponentFixture<NewPatientsRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPatientsRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPatientsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
