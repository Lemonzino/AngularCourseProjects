import { Component, OnInit } from '@angular/core';
import { CocktailRecipesService } from '../../cocktail-recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cocktail-recipe-detail',
  templateUrl: './cocktail-recipe-detail.component.html',
  styleUrls: ['./cocktail-recipe-detail.component.css']
})
export class CocktailRecipeDetailComponent implements OnInit {
  selectedCocktail = this.cocktailService.selectedCocktail;

  constructor(
    private cocktailService: CocktailRecipesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (data: Params) => {
        this.cocktailService.searchRecipe(data['id']);
      }
    );
  }
}
