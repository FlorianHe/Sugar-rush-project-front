import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { APP_ROUTES } from './shared/globals/routes';
import { ArticleComponent } from './pages/article/article.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DetailComponent } from './components/user/detail/detail.component';
import { CreationArticleComponent } from './pages/creation-article/creation-article.component';

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
  },
  {
    path: APP_ROUTES.rCategories,
    title: 'Sugar Rush : Catégories',
    component: CategoriesComponent
  },
  {
    path: APP_ROUTES.rCategories + '/:slug',
    title: 'Sugar Rush : Categorie',
    component: CategoryComponent
  },
  {
    path: APP_ROUTES.rAboutUs,
    title: 'Sugar Rush : A propos',
    component: AboutUsComponent
  },
  {
    path: APP_ROUTES.rdetailUser,
    title: 'Sugar Rush : Utilisateur',
    component: DetailComponent
  },
  {
    path: APP_ROUTES.rNotFound,
    component: PageNotFoundComponent,
    title: 'Sugar Rush : Not Found',
  },
  {
    path: APP_ROUTES.rCreation,
    component: CreationArticleComponent,
    title: 'Sugar Rush : Create your own article',
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