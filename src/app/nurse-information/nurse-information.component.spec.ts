import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseInformationComponent } from './nurse-information.component';

describe('NurseInformationComponent', () => {
  let component: NurseInformationComponent;
  let fixture: ComponentFixture<NurseInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
