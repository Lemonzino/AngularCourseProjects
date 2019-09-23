import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailRecipesService } from '../cocktail-recipes.service';

@Component({
  selector: 'app-cocktail-recipe-search',
  templateUrl: './cocktail-recipe-search.component.html',
  styleUrls: ['./cocktail-recipe-search.component.css']
})
export class CocktailRecipeSearchComponent implements OnInit {
  selectedValue: string = "s";
  categories: string[] = [];
  ingredients: string[] = [];
  glasses: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cocktailService: CocktailRecipesService
  ) { }

  ngOnInit() {
    this.cocktailService.getIngredients().subscribe(
      (data: string) => {
        let ingr: string[] = [];
        for(let ingredient of data['drinks']) {
          ingr.push(ingredient.strIngredient1);
        }
        this.ingredients = ingr.sort();
      }
    );
    this.cocktailService.getCategories().subscribe(
      (data: string) => {
        let categ: string[] = [];
        for(let category of data['drinks']) {
          categ.push(category.strCategory);
        }
        this.categories = categ.sort();
      }
    );
    this.cocktailService.getGlasses().subscribe(
      (data: string) => {
        let glasses: string[] = [];
        for(let glass of data['drinks']) {
          glasses.push(glass.strGlass);
        }
        this.glasses = glasses.sort();
      }
    );
  }

  onSubmit(f: NgForm) {
    if(f.valid) {
      this.cocktailService.searchRecipes(this.selectedValue, f.value['valueToSearch']).subscribe(
        (error: boolean) => {
          if(!error) {
            this.router.navigate(["cocktails-list"], {relativeTo: this.route});
          }
        }
      );
    }
  }
}
