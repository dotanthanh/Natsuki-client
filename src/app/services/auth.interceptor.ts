import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler,
       HttpInterceptor, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private injector: Injector ) { }

  intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    const auth = this.injector.get( AuthService );

    const authHeader = 'bearer' + ' ' + auth.getToken();

    request = request.clone( {
      setHeaders: {
        Authorization: authHeader
      }
    } );

    console.log(request);
    return next.handle(request);
  }

}
