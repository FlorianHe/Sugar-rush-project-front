import { Component, TemplateRef, ViewChild } from '@angular/core';
import { APP_ROUTES } from '../shared/globals/routes';
import { MatDialog } from '@angular/material/dialog';
import { ConnectionComponent } from '../components/user/connection/connection.component';
import { Category } from '../shared/interfaces/category';
import { CategoriesApiService } from '../services/categories-api.service';
import { User } from '../shared/interfaces/user';
import { UserService } from '../services/user.service';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public APP_ROUTES = APP_ROUTES;

  private _categories!: Category[];

  isLoggedIn = this.userService.userLoggedIn;

  user = this.userService.getUser();
  usernameUser = this.userService.userUsername;

  @ViewChild(MatMenuTrigger) 
  menuTrigger!: MatMenuTrigger;

  constructor(public categoriesService: CategoriesApiService, private dialog: MatDialog, private userService: UserService) {}

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

  logout() {
    this.userService.logoutUser();
  }

  get categories(): Category[] {
    return this._categories;
  }
}
