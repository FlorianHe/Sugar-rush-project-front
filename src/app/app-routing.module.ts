import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPageComponent } from './pages/demo/demo.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/categories/category/category.component';

const routes: Routes = [
  { path: '', component: DemoPageComponent },
  { path: 'categories', title: 'Catégories', component: CategoriesComponent },
  { path: 'categories/:categoryID', title: 'Categorie', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
