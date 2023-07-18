import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArticleTypeMainComponent } from './components/articles/article-type-main/article-type-main.component';
import { ArticleTypeSideComponent } from './components/articles/article-type-side/article-type-side.component';
import { ArticleTypeSmallComponent } from './components/articles/article-type-small/article-type-small.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ArticlesComponent } from './pages/articles/articles.component';

import { BodyComponent } from './components/articles/article/body/body.component';
import { OtherComponent } from './components/articles/article/other/other.component';
import { TitleComponent } from './components/articles/article/title/title.component';
import { ArticleComponent } from './pages/article/article.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';
import { StockComponent } from './components/stock/stock.component';
import { PercentChangePipe } from './pipes/percent-change.pipe';
import { AddPlusPipe } from './pipes/add-plus.pipe';

import { UsersComponent } from './pages/users/users.component';
import { ConnectionComponent } from './components/user/connection/connection.component';
import { DetailComponent } from './components/user/detail/detail.component';
import { ArticleCommentComponent } from './components/articles/article/comment/comment.component';
import { CommentComponent } from './components/comment/comment.component';

import { CategoryBlockComponent } from './components/category-block/category-block.component';
import { SugarMeterComponent } from './pages/users/sugar-meter/sugar-meter.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { SugarDataComponent } from './components/sugar-data/sugar-data.component';
import { SugarInputsComponent } from './components/sugar-inputs/sugar-inputs.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PersonComponent } from './components/person/person.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { SugarMeterPipe } from './pipes/sugar-meter.pipe';

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
    AddPlusPipe,
    UsersComponent,
    ConnectionComponent,
    DetailComponent,
    ArticleCommentComponent,
    CommentComponent,
    CategoryBlockComponent,
    SugarMeterComponent,
    ProfilesComponent,
    SugarDataComponent,
    SugarInputsComponent,
    AboutUsComponent,
    PersonComponent,
    SugarMeterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
