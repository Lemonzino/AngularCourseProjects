import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { RoutePartComponent } from './route-part/route-part.component';
import { RandomPartComponent } from "./random-part/random-part.component";
import { WeatherPartComponent } from "./weather-part/weather-part.component";

const appRoute: Routes = [
    {path: 'randomZone', component: RandomPartComponent},
    {path: 'weatherZone', component: WeatherPartComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouteRouting {

}