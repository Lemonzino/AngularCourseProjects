import { NgModule } from "@angular/core";
import { RandomEl1Component } from "./random-el1/random-el1.component";
import { RandomEl2Component } from "./random-el2/random-el2.component";
import { RandomService } from "./randomServices/random.service";
import { RandomCountService } from "./randomServices/randomCount.service";
import { RandomPartComponent } from "./random-part.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FancyButtonDirective } from "./fancy-button.directive";


@NgModule({
    declarations: [
        RandomPartComponent,
        RandomEl1Component,
        RandomEl2Component,
        FancyButtonDirective
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        RandomService,
        RandomCountService
    ]
})
export class RandomModule {

}