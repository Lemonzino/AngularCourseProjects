import { NgModule } from "@angular/core";
import { RoutePartRouting } from "./route-part.routing";
import { CommonModule } from "@angular/common";
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { DeactGuard } from "./deactGuard.service";
import { RoutePartComponent } from "./route-part.component";


@NgModule({
    declarations: [
        Child1Component,
        Child2Component,
        RoutePartComponent
    ],
    imports: [
        CommonModule,
        RoutePartRouting
    ],
    providers: [
        DeactGuard
    ]
})
export class RoutePartModule {

}