import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { APP_ROUTES } from './shared/globals/routes';

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
