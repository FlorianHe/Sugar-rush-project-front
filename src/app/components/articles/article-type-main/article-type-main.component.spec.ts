import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTypeMainComponent } from './article-type-main.component';

describe('ArticleTypeMainComponent', () => {
  let component: ArticleTypeMainComponent;
  let fixture: ComponentFixture<ArticleTypeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTypeMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleTypeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
