import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable()
export class TimeInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const start = Date.now();
    return next.handle(request).pipe(
      finalize(() => {
        const end = Date.now();
        console.log(`${request.method} ${request.url} a pris ${end - start}ms`);
      })
    );
  }
}
