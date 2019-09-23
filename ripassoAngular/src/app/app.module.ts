import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouteRouting } from './app-route.routing';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RoutePartModule } from './route-part/route-part.module';
import { RandomModule } from './random-part/random.module';
import { WeatherPartModule } from './weather-part/weather-part.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRouteRouting,
    RoutePartModule,
    RandomModule,
    WeatherPartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
