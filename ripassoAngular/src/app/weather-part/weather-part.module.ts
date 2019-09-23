import { NgModule } from "@angular/core";
import { WeatherPartComponent } from "./weather-part.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { WeatherService } from "./weather-services/weather.services";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        WeatherPartComponent,
        WeatherDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        WeatherService,
    ]
})
export class WeatherPartModule {

}