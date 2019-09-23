import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import * as firebase from "firebase";

@Injectable()
export class AuthService {
	token: string;

	constructor(private router: Router) { }

	signinUser(email: string, password: string) {
		return firebase.auth().signInWithEmailAndPassword(email, password)
			.then(
				(response) => {
					this.router.navigate(['/cocktail-recipes']);
					firebase.auth().currentUser.getIdToken()
						.then(
							(token: string) => { this.token = token; }
						)
				}
			);
	}

	logout() {
		firebase.auth().signOut();
		this.token = null;
		this.router.navigate(["/"]);
	}

	getToken() {
		firebase.auth().currentUser.getIdToken()
			.then(
				(token: string) => { this.token = token; }
			);

		return this.token;
	}

	initToken() {
		firebase.auth().onAuthStateChanged(
			(user) => {
				if (user != null) {
					this.router.navigate(['/cocktail-recipes']);
					user.getIdToken().then(
						(token: string) => {
							this.token = token;
						}
					);
				}
			}
		);
	}

	isAuthenticated() {
		return this.token != null;
	}
}
