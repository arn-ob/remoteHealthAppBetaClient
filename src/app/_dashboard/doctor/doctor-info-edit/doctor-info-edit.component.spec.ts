import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInfoEditComponent } from './doctor-info-edit.component';

describe('DoctorInfoEditComponent', () => {
  let component: DoctorInfoEditComponent;
  let fixture: ComponentFixture<DoctorInfoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorInfoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
