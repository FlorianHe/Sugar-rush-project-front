import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleType3Component } from './article-type3.component';

describe('ArticleType3Component', () => {
  let component: ArticleType3Component;
  let fixture: ComponentFixture<ArticleType3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleType3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleType3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
