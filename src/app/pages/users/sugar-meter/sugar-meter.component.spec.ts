import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarMeterComponent } from './sugar-meter.component';

describe('SugarMeterComponent', () => {
  let component: SugarMeterComponent;
  let fixture: ComponentFixture<SugarMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugarMeterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugarMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
