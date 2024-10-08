import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PostInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Retrieve the auth token from local storage or any other storage
    const authToken = localStorage.getItem('authToken');

    // Clone the request and add the Authorization header if token is available
    let authReq = req.body;
    if (authToken) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
    }

    // Pass the request to the next handler (could be another interceptor or the backend request)
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle errors globally
        if (error.status === 401) {
          // Handle unauthorized access (token expired or invalid)
          console.error('Unauthorized access - maybe redirect to login');
        } else if (error.status === 500) {
          // Handle server errors
          console.error('Server error - try again later');
        }
        // Always return an observable error to the client
        return throwError(() => error);
      })
    );
  }
}