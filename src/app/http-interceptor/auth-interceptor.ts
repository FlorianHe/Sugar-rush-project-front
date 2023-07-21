import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const token = this.userService.getToken();

      if (token) {
        const authRequest = request.clone({
          setHeaders: {
            'Authorization': `Bearer ${token}`
          }
        });

        return next.handle(authRequest);
    }

    return next.handle(request);
  }
}
