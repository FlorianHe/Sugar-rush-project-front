import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarInputsComponent } from './sugar-inputs.component';

describe('SugarInputsComponent', () => {
  let component: SugarInputsComponent;
  let fixture: ComponentFixture<SugarInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugarInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugarInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
