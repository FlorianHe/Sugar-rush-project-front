import { Component } from '@angular/core';
import { APP_ROUTES } from '../shared/globals/routes';
import { MatDialog } from '@angular/material/dialog';
import { ConnectionComponent } from '../components/user/connection/connection.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public APP_ROUTES = APP_ROUTES;

  constructor(private dialog: MatDialog) {}

  openModal() {
    console.log("click")
    const dialogRef = this.dialog.open(ConnectionComponent);

    dialogRef.afterClosed().subscribe(result => {
      // Handle modal close event if needed
      console.log('Modal closed', result);
    });
  }
}
