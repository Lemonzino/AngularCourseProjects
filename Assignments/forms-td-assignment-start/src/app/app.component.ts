import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild('f') form: NgForm;
	defaultDropdown = "advance";

	onSubmit() {
		console.log(this.form.value.email);
		console.log(this.form.value.subscription);
		console.log(this.form.value.password);
	}

}
