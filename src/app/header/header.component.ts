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

  constructor(private dialog: MatDialog) {}
  
  private _categories!: Category[];

  constructor(public categoriesService: CategoriesApiService) {}

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => {
        this._categories = categories;
      });
  }
  openModal() {
    console.log("click")
    const dialogRef = this.dialog.open(ConnectionComponent, {
      panelClass: 'modal-login',
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle modal close event if needed
      console.log('Modal closed', result);
    });

  get categories(): Category[] {
    return this._categories;
  }
}
