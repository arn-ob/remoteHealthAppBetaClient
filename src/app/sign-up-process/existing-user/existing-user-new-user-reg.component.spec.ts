import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingUserNewUserRegComponent } from './existing-user-new-user-reg.component';

describe('ExistingUserNewUserRegComponent', () => {
  let component: ExistingUserNewUserRegComponent;
  let fixture: ComponentFixture<ExistingUserNewUserRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingUserNewUserRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingUserNewUserRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
