import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArticleTypeMainComponent } from './components/articles/article-type-main/article-type-main.component';
import { ArticleTypeSideComponent } from './components/articles/article-type-side/article-type-side.component';
import { ArticleTypeSmallComponent } from './components/articles/article-type-small/article-type-small.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { ArticleComponent } from './pages/article/article.component';
import { TitleComponent } from './components/articles/article/title/title.component';
import { BodyComponent } from './components/articles/article/body/body.component';
import { OtherComponent } from './components/articles/article/other/other.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';
import { StockComponent } from './components/stock/stock.component';
import { HttpClientModule } from '@angular/common/http';
import { PercentChangePipe } from './pipes/percent-change.pipe';
import { addPlusPipe } from './pipes/add-plus.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleTypeMainComponent, 
    ArticleTypeSideComponent, 
    ArticleTypeSmallComponent, 
    CategoriesComponent, 
    CategoryComponent, 
    PageNotFoundComponent, 
    ArticleComponent, 
    TitleComponent, 
    BodyComponent, 
    OtherComponent, 
    HeaderComponent, 
    FooterComponent, 
    StockComponent,
    PercentChangePipe,
    addPlusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
