import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleType1Component } from './article-type-main.component';

describe('ArticleType1Component', () => {
  let component: ArticleType1Component;
  let fixture: ComponentFixture<ArticleType1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleType1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
