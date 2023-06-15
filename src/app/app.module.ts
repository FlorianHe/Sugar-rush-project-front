import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArticlesComponent } from './components/articles/articles.component';
import { DemoComponent } from './components/demo/demo.component';
import { DemoDirective } from './directives/demo.directive';
import { DemoPageComponent } from './pages/demo/demo.component';
import { DemoPipe } from './pipes/demo.pipe';
import { ArticleType1Component } from './components/articles/article-type1/article-type1.component';
import { ArticleType2Component } from './components/articles/article-type2/article-type2.component';
import { ArticleType3Component } from './components/articles/article-type3/article-type3.component';


@NgModule({
  declarations: [AppComponent, DemoPageComponent, DemoComponent, DemoPipe, DemoDirective, ArticlesComponent, ArticleType1Component, ArticleType2Component, ArticleType3Component],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
