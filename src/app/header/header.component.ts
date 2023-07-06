import { Component } from '@angular/core';
import { APP_ROUTES } from '../shared/globals/routes';
import { MatDialog } from '@angular/material/dialog';
import { ConnectionComponent } from '../components/user/connection/connection.component';
import { Category } from '../shared/interfaces/category';
import { CategoriesApiService } from '../services/categories-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public APP_ROUTES = APP_ROUTES;
  
  private _categories!: Category[];

  constructor(public categoriesService: CategoriesApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => {
        this._categories = categories;
      });
  }
  openModal() {
    const dialogRef = this.dialog.open(ConnectionComponent, {
      panelClass: 'modal-login',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  get categories(): Category[] {
    return this._categories;
  }
}
