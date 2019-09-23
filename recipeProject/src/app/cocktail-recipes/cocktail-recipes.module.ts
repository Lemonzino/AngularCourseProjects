import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { CocktailRecipesComponent } from "./cocktail-recipes.component";
import { CocktailRecipeDetailComponent } from "./cocktail-recipes-found/cocktail-recipe-detail/cocktail-recipe-detail.component";
import { CocktailRecipesListComponent } from "./cocktail-recipes-found/cocktail-recipes-list/cocktail-recipes-list.component";
import { CocktailRecipeSearchComponent } from "./cocktail-recipe-search/cocktail-recipe-search.component";
import { CocktailRecipesFoundComponent } from './cocktail-recipes-found/cocktail-recipes-found.component';
import { CocktailRecipesDefaultComponent } from './cocktail-recipes-default/cocktail-recipes-default.component';
import { CocktailRecipesRouteModule } from "./cocktail-recipes-route.routing";
import { SharedModule } from "../shared/shared.module";
import { CocktailRecipesService } from "./cocktail-recipes.service";
import { HttpClientModule } from "@angular/common/http";
import { CocktailRecipesItemComponent } from './cocktail-recipes-found/cocktail-recipes-list/cocktail-recipes-item/cocktail-recipes-item.component';
import { CocktailRecipeDetailDefaultComponent } from "./cocktail-recipes-found/cocktail-recipe-detail/cocktail-recipe-detail-default/cocktail-recipe-detail-default.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        CocktailRecipesComponent,
        CocktailRecipeDetailComponent,
        CocktailRecipesListComponent,
        CocktailRecipeSearchComponent,
        CocktailRecipesFoundComponent,
        CocktailRecipesDefaultComponent,
        CocktailRecipesItemComponent,
        CocktailRecipeDetailDefaultComponent
    ],
    imports: [
        SharedModule,
        CocktailRecipesRouteModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
    providers: [
        CocktailRecipesService
    ]
})
export class CocktailRecipesModule {}