import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonHistoricComponent } from './common-historic.component';

describe('CommonHistoricComponent', () => {
  let component: CommonHistoricComponent;
  let fixture: ComponentFixture<CommonHistoricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonHistoricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
