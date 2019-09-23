import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAO8hfYYok9RtJgI-x0axmF4zsOraodi1Q",
      authDomain: "cocktail-recipe-proj.firebaseapp.com",
    });
    this.authService.initToken();
  }
}
