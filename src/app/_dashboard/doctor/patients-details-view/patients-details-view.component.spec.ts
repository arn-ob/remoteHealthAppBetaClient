import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsDetailsViewComponent } from './patients-details-view.component';

describe('PatientsDetailsViewComponent', () => {
  let component: PatientsDetailsViewComponent;
  let fixture: ComponentFixture<PatientsDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
