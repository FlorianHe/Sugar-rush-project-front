import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { APP_ROUTES } from './shared/globals/routes';
import { DemoPageComponent } from './pages/demo/demo.component';
import { ArticleComponent } from './components/articles/article/article.component';

const routes: Routes = [
  {
    path: APP_ROUTES.rIndex,
    redirectTo: APP_ROUTES.rArticles,
    pathMatch: 'full'
  },
  {
    path: APP_ROUTES.rArticles,
    component: ArticlesComponent,
    title: "Sugar Rush | L'actu Sucré "
  },
  {
    path: APP_ROUTES.rArticles + '/:articleSlug',
    component: ArticleComponent,
    title: 'Sugar Rush : News',
  },
  {
    path: APP_ROUTES.rCategories,
    title: 'Sugar Rush : Catégories',
    component: CategoriesComponent
  },
  {
    path: APP_ROUTES.rCategories + '/:categoryID',
    title: 'Sugar Rush : Categorie',
    component: CategoryComponent
  },
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
