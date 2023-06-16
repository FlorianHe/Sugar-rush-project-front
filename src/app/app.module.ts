import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArticleTypeMainComponent } from './components/articles/article-type-main/article-type-main.component';
import { ArticleTypeSideComponent } from './components/articles/article-type-side/article-type-side.component';
import { ArticleTypeSmallComponent } from './components/articles/article-type-small/article-type-small.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { DemoComponent } from './components/demo/demo.component';
import { DemoDirective } from './directives/demo.directive';

import { ArticleComponent } from './components/articles/article/article.component';
import { TitleComponent } from './components/articles/article/title/title.component';
import { BodyComponent } from './components/articles/article/body/body.component';
import { OtherComponent } from './components/articles/article/other/other.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


import { DemoPageComponent } from './pages/demo/demo.component';
import { DemoPipe } from './pipes/demo.pipe';


@NgModule({
  declarations: [AppComponent, DemoPageComponent, DemoComponent, DemoPipe, DemoDirective, ArticlesComponent, ArticleTypeMainComponent, ArticleTypeSideComponent, ArticleTypeSmallComponent, PageNotFoundComponent, ArticleComponent, TitleComponent, BodyComponent, OtherComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
