import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarDataComponent } from './sugar-data.component';

describe('SugarDataComponent', () => {
  let component: SugarDataComponent;
  let fixture: ComponentFixture<SugarDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugarDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SugarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
