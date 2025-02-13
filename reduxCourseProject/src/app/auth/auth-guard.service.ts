import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private store: Store<fromApp.AppState>) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.store.select('auth').map(
			(authState: fromAuth.State) => {
				return authState.authenticated;
			}
		);
	}
}
