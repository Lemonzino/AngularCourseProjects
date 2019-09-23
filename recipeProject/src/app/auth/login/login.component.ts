import { Component, OnInit, OnChanges, AfterContentChecked, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private connectionError: boolean = false;
  private errorMessage: string;

  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private authService: AuthService
  ) { }

  onSubmit() {
    if(this.form.valid) {
      this.authService.signinUser(this.form.value.email, this.form.value.password).catch(
        (error) => { 
          this.errorMessage = error.message;
          this.connectionError = true;
        }
      );
    }
  }

  onError() {
    return this.connectionError;
  }
}
