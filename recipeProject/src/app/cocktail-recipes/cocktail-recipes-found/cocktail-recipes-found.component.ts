import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CocktailRecipesService } from '../cocktail-recipes.service';

@Component({
  selector: 'app-cocktail-recipes-found',
  templateUrl: './cocktail-recipes-found.component.html',
  styleUrls: ['./cocktail-recipes-found.component.css']
})
export class CocktailRecipesFoundComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cocktailService: CocktailRecipesService
  ) {}

  ngOnInit() {
    if(this.cocktailService.cocktailsList.size == 0) {
      this.router.navigate(["../"], {relativeTo: this.route});
    }
  }

}
