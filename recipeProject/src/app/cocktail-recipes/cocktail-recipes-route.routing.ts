import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CocktailRecipesComponent } from "./cocktail-recipes.component";
import { CocktailRecipesDefaultComponent } from "./cocktail-recipes-default/cocktail-recipes-default.component";
import { CocktailRecipesFoundComponent } from "./cocktail-recipes-found/cocktail-recipes-found.component";
import { CocktailRecipeDetailComponent } from "./cocktail-recipes-found/cocktail-recipe-detail/cocktail-recipe-detail.component";
import { CocktailRecipeDetailDefaultComponent } from "./cocktail-recipes-found/cocktail-recipe-detail/cocktail-recipe-detail-default/cocktail-recipe-detail-default.component";
import { AuthGuard } from "../auth/auth-guard.service";

const cocktailRoute: Routes = [
    {path: 'cocktail-recipes', component: CocktailRecipesComponent, canActivate: [AuthGuard], children: [
        {path: '', component: CocktailRecipesDefaultComponent },
        {path: 'cocktails-list', component: CocktailRecipesFoundComponent, children: [
            {path: '', component: CocktailRecipeDetailDefaultComponent},
            {path: ':id', component: CocktailRecipeDetailComponent},
        ]},
    ]},
    {path: "**", redirectTo: "/"}
];

@NgModule({
    imports: [
        RouterModule.forChild(cocktailRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class CocktailRecipesRouteModule {}