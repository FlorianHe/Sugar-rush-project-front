import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
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

import { BodyComponent } from './components/articles/article/body/body.component';
import { OtherComponent } from './components/articles/article/other/other.component';
import { TitleComponent } from './components/articles/article/title/title.component';
import { ArticleComponent } from './pages/article/article.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { StockComponent } from './components/stock/stock.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';
import { AddPlusPipe } from './pipes/add-plus.pipe';
import { PercentChangePipe } from './pipes/percent-change.pipe';

import { ArticleCommentComponent } from './components/articles/article/comment/comment.component';
import { CommentComponent } from './components/comment/comment.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { ConnectionComponent } from './components/user/connection/connection.component';
import { DetailComponent } from './components/user/detail/detail.component';
import { UsersComponent } from './pages/users/users.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CategoryBlockComponent } from './components/category-block/category-block.component';
import { PersonComponent } from './components/person/person.component';
import { SugarDataComponent } from './components/sugar-data/sugar-data.component';
import { SugarInputsComponent } from './components/sugar-inputs/sugar-inputs.component';
import { AuthInterceptor } from './http-interceptor/auth-interceptor';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { SugarMeterComponent } from './pages/users/sugar-meter/sugar-meter.component';

import { CreationArticleComponent } from './pages/creation-article/creation-article.component';

import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { InformationComponent } from './components/user/information/information.component';
import { SearchComponent } from './pages/search/search.component';
import { SugarMeterComponent } from './pages/users/sugar-meter/sugar-meter.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { DateDisplayPipe } from './pipes/date-display.pipe';
import { SugarAmountPipe } from './pipes/sugar-amount-pipe';
import { SugarMeterPipe } from './pipes/sugar-meter.pipe';
import { ArianeComponent } from './components/ariane/ariane.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SubSectionComponent } from './pages/creation-article/sub-section/sub-section.component';


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
    CreationArticleComponent,
    InformationComponent,
    ParagraphComponent,
    SugarMeterPipe,
    SugarAmountPipe,
    SearchbarComponent,
    SearchComponent,
    DateDisplayPipe,
    ArianeComponent,
    SubSectionComponent,
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
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    InfiniteScrollModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
