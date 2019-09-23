import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class AuthModule {

}