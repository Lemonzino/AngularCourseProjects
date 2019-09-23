import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";

import { Observable } from "rxjs/Observable";

import { AuthService } from '../auth/auth.service';

import 'rxjs/add/operator/switchMap';

import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private store: Store<fromApp.AppState>, private authService: AuthService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		console.log("Intercept ", req);

		return this.store.select('auth').switchMap(
			(authState: fromAuth.State) => {
				const copiedReq = req.clone({
					params: req.params.append('auth', authState.token)
				});
				return next.handle(copiedReq);
			}
		)
	}

	// intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
	//     throw new Error("Method not implemented.");
	// }
}
