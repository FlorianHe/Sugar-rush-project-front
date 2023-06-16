import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { APP_ROUTES } from './shared/globals/routes';
import { ArticleComponent } from './pages/article/article.component';

const routes: Routes = [
  { 
    
    path: APP_ROUTES.rArticles, 
    redirectTo: APP_ROUTES.rIndex,
    pathMatch: 'full'
  },
  {
    path: APP_ROUTES.rIndex,
    component: ArticlesComponent,
    title: "Sugar Rush | L'actu Sucré "
  },
  {
    path: APP_ROUTES.rArticles + '/:articleSlug',
    component: ArticleComponent,
    title: 'Sugar Rush : News',
  },// A décommenté après merge
  {
    path: APP_ROUTES.rNotFound,
    component: PageNotFoundComponent,
    title: 'Sugar Rush : Not Found',
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
