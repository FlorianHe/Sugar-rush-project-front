import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { APP_ROUTES } from 'src/app/shared/globals/routes';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  guardUser = this.userService.user;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.guardUser.subscribe((value) => {
      if (value == null) {
        this.router.navigate([APP_ROUTES.notFound]);
      }
    })
  }
}
