import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("INTERCEPTOR");
        let currentUser = this.authService.currentUserValue;

        if(currentUser && currentUser.access_token) {
            request = request.clone({
                setHeaders: {
                   Authorization: `Bearer ${currentUser.access_token}`
                }
            });
        }
        return next.handle(request);
    }
}
