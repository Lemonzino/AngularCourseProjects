import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { AppRouteModule } from "../app-route.routing";


@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        AppRouteModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class CoreModule {}