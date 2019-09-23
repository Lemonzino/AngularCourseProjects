import { Optional } from "@angular/core";

export class WeatherInfo {
    constructor(
        private infoWeather: string,
        private temperature: number,
        private sunrise?: string,
        private sunset?: string,
        private humidity?: number
    ) {}
}