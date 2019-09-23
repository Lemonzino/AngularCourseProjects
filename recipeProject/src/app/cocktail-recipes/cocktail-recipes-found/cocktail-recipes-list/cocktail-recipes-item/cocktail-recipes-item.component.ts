import { Component, OnInit, Input } from '@angular/core';
import { CocktailRecipe } from '../../../cocktail-recipe.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-cocktail-recipes-item',
  templateUrl: './cocktail-recipes-item.component.html',
  styleUrls: ['./cocktail-recipes-item.component.css'],
  animations: [
    trigger('enterAnim', [
			state('normal', style({
				
			})),
			state('bigger', style({
        'transform': 'scale(0.9,0.9)',
        'border': '1px solid red'
      })),
			transition('normal <=> bigger', animate(300)),
    ])
  ]
})
export class CocktailRecipesItemComponent implements OnInit {
  @Input('cocktailInfo') cocktail: CocktailRecipe;
  index: string;
  public animState: string = "normal";
  constructor() { }

  ngOnInit() {
    this.index = this.cocktail.id;
  }

  onMouseEnter() {
    this.animState = "bigger";
  }

  onMouseLeave() {
    this.animState = "normal";
  }
}
