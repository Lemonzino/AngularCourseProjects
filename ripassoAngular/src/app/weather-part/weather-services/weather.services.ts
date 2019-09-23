import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { WeatherInfo } from "../weather-info.model";
import { Subject } from "rxjs";

@Injectable()
export class WeatherService {
    weatherInfo: WeatherInfo;
    weekWeatherInfo: WeatherInfo[] = [];
    placeName: string = "ancona";

    constructor(private http: HttpClient) {}

    startPeriodicUpdate() {
        this.http.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + this.placeName + '")&format=json').subscribe(
            (response) => {
                let infoWeather = response['query'].results.channel;
                this.weatherInfo = new WeatherInfo(
                    infoWeather.item.condition.text,
                    ((infoWeather.item.condition.temp - 32) * (5/9)),
                    infoWeather.astronomy.sunrise,
                    infoWeather.astronomy.sunset,
                    infoWeather.atmosphere.humidity
                );   
                let forecast = infoWeather.item.forecast;
                for(let info of forecast) {
                    let temp = (+info.high + +info.low) / 2;
                    this.weekWeatherInfo.push(new WeatherInfo(
                        info.text,
                        ((temp - 32) * (5/9))
                    ));
                } 
                
                console.log(this.weatherInfo, this.weekWeatherInfo);
            }
        );
    }
}