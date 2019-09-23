import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	projForm: FormGroup;

	ngOnInit() {
		this.projForm = new FormGroup({
			'projName': new FormControl(null, [Validators.required], this.checkProjNameAsync),
			'email': new FormControl(null, [Validators.required, Validators.email]),
			'projStatus': new FormControl('critical')
		});
	}

	onSubmit() {
		console.log(this.projForm.value);
	}

	checkProjName(control: FormControl): { [err: string]: boolean } {
		if (control.value === "test") {
			return { 'invalidName': true }
		} else {
			return null;
		}
	}

	checkProjNameAsync(control: FormControl): Promise<any> | Observable<any> {
		const promise = new Promise<any>(
			(resolve, reject) => {
				setTimeout(
					() => {
						if (control.value === "test") {
							resolve({ 'invalidName': true });
						} else {
							resolve(null);
						}
					}, 1000);
			}
		);
		return promise;
	}
}
