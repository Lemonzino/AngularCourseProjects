import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from './weather-services/weather.services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-weather-part',
  templateUrl: './weather-part.component.html',
  styleUrls: ['./weather-part.component.css']
})
export class WeatherPartComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.weatherService.startPeriodicUpdate();
  }

  setDefault() {
    this.form.setValue({
      name: "Prova",
      mail: "prova@prova.it",
      password: "test",
      testSelect: "2"
    });
  }

  changeName() {
    this.form.form.patchValue({
      name: "Test name"
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}
