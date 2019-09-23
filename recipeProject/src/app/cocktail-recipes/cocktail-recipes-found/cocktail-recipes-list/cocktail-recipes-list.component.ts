import { Component, OnInit } from '@angular/core';
import { CocktailRecipesService } from '../../cocktail-recipes.service';
import { CocktailRecipe } from '../../cocktail-recipe.model';

@Component({
  selector: 'app-cocktail-recipes-list',
  templateUrl: './cocktail-recipes-list.component.html',
  styleUrls: ['./cocktail-recipes-list.component.css']
})
export class CocktailRecipesListComponent implements OnInit {
  cocktailsList: Map<string, CocktailRecipe>;

  constructor(
    private cocktailService: CocktailRecipesService
  ) { }

  ngOnInit() {
    this.cocktailsList = this.cocktailService.cocktailsList;
    this.cocktailService.cocktailsListLoaded.subscribe(
      (list: Map<string, CocktailRecipe>) => { this.cocktailsList = list;}
    ); 
  }

  getValues(map: Map<string, CocktailRecipe>) {
    return Array.from(map.values())
  }
}
