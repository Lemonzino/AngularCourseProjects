import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'userInfo': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'mail': new FormControl(null, [Validators.email, Validators.required])
      }),
      'password': new FormControl(null, Validators.required),
      'testSelect': new FormControl('2'),
      'randomStuff': new FormArray([])
    });
  }

  addRandom() {
    let stuffInfo = new FormGroup({
      'stuffInfo': new FormControl(null, Validators.required)
    });
    (<FormArray>this.form.get("randomStuff")).push(stuffInfo);
  }

  checkInfo(index: number) {
    let formArr: FormArray = <FormArray>this.form.get('randomStuff');
    let valid: boolean = formArr.controls[index].get('stuffInfo').valid;
    let touched: boolean = formArr.controls[index].get('stuffInfo').touched;
    if(!valid && touched) {
      return true;
    } else {
      return false;
    }
  }

  setValues() {
    (<FormArray>this.form.get("randomStuff")).controls.push(new FormGroup({
      'stuffInfo': new FormControl('test', Validators.required)
    }));

  }

  onSubmit() {
    console.log("submit",  this.form);
  }
}
