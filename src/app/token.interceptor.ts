// src/app/token.interceptor.ts

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwtToken = this.authService.getJwtToken();
    if (jwtToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${jwtToken}`)
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}