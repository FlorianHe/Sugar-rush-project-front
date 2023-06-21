import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArticleTypeMainComponent } from './components/articles/article-type-main/article-type-main.component';
import { ArticleTypeSideComponent } from './components/articles/article-type-side/article-type-side.component';
import { ArticleTypeSmallComponent } from './components/articles/article-type-small/article-type-small.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ArticlesComponent } from './pages/articles/articles.component';

<<<<<<< HEAD
import { BodyComponent } from './components/articles/article/body/body.component';
import { OtherComponent } from './components/articles/article/other/other.component';
import { TitleComponent } from './components/articles/article/title/title.component';
import { ArticleComponent } from './pages/article/article.component';
=======
import { ArticleComponent } from './components/articles/article/article.component';
import { BodyComponent } from './components/articles/article/body/body.component';
import { OtherComponent } from './components/articles/article/other/other.component';
import { TitleComponent } from './components/articles/article/title/title.component';

>>>>>>> origin/US-S2-ArticlesHome
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';



import { HttpClientModule } from '@angular/common/http';

@NgModule({
<<<<<<< HEAD
  declarations: [AppComponent, ArticlesComponent, ArticleTypeMainComponent, ArticleTypeSideComponent, ArticleTypeSmallComponent, CategoriesComponent, CategoryComponent, PageNotFoundComponent, ArticleComponent, TitleComponent, BodyComponent, OtherComponent,  HeaderComponent, FooterComponent],
=======
  declarations: [AppComponent, DemoPageComponent, DemoComponent, DemoPipe, DemoDirective, ArticlesComponent, ArticleTypeMainComponent, ArticleTypeSideComponent, ArticleTypeSmallComponent, PageNotFoundComponent, ArticleComponent, TitleComponent, BodyComponent, OtherComponent],
>>>>>>> origin/US-S2-ArticlesHome
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
