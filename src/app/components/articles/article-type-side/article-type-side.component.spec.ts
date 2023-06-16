import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTypeSideComponent } from './article-type-side.component';

describe('ArticleTypeSideComponent', () => {
  let component: ArticleTypeSideComponent;
  let fixture: ComponentFixture<ArticleTypeSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTypeSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleTypeSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
