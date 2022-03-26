import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranspalFormComponent } from './transpal-form.component';

describe('TranspalFormComponent', () => {
  let component: TranspalFormComponent;
  let fixture: ComponentFixture<TranspalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranspalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranspalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
