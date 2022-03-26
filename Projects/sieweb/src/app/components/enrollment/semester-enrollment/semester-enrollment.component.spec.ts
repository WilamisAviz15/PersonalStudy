import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterEnrollmentComponent } from './semester-enrollment.component';

describe('SemesterEnrollmentComponent', () => {
  let component: SemesterEnrollmentComponent;
  let fixture: ComponentFixture<SemesterEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemesterEnrollmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
