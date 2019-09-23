import { NgModule } from "@angular/core";
import { PanelCollapseComponent } from "./panel-collapse/panel-collapse.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        PanelCollapseComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        PanelCollapseComponent,
    ]
})
export class SharedModule {}