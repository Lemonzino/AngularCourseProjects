import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor() { }


	ngOnInit() {
		firebase.initializeApp({
			apiKey: "AIzaSyBX36_CzwFLfpmNK0g1SVJibNiiaz-AtdA",
			authDomain: "ng-recipe-book-cddcf.firebaseapp.com",
		});
	}
}
