import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTypeSmallComponent } from './article-type-small.component';

describe('ArticleTypeSmallComponent', () => {
  let component: ArticleTypeSmallComponent;
  let fixture: ComponentFixture<ArticleTypeSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTypeSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleTypeSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
