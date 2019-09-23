import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';

import { RoutePartComponent } from "./route-part.component";
import { Child1Component } from "./child1/child1.component";
import { Child2Component } from "./child2/child2.component";
import { DeactGuard } from "./deactGuard.service";

const routePartRoutes: Routes = [
    {path: 'routerZone', component: RoutePartComponent, children: [
        {path: 'child1', component: Child1Component, data: {title: 'Child1Data'} },
        {path: 'child2', component: Child2Component, canDeactivate: [DeactGuard] },
        {path: 'child2/:id', component: Child2Component, canDeactivate: [DeactGuard] }
    ]}
];


@NgModule({
    imports: [
        RouterModule.forChild(routePartRoutes)
    ],
    exports:[
        RouterModule,
        FormsModule,
    ]
})
export class RoutePartRouting {

}