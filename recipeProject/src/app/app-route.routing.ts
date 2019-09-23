import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from "./core/home/home.component";
import { LoginComponent } from "./auth/login/login.component";
import { CocktailRecipesComponent } from "./cocktail-recipes/cocktail-recipes.component";
import { AuthGuard } from "./auth/auth-guard.service";

const route: Routes = [
    {path: "", component: HomeComponent, pathMatch: 'full'},
    {path: "login", component: LoginComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(route)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouteModule {

}