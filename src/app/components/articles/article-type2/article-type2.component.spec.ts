import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleType2Component } from './article-type2.component';

describe('ArticleType2Component', () => {
  let component: ArticleType2Component;
  let fixture: ComponentFixture<ArticleType2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleType2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
