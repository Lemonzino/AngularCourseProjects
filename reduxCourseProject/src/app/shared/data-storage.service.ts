import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

import 'rxjs/Rx';

import { Recipe } from '../recipes/recipe.model'
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
	constructor(
		private httpClient: HttpClient,
		private recipeService: RecipeService,
		private authService: AuthService) { }

	storeRecipes() {
		// const headers = new HttpHeaders().set('Authorization', 'Bearer fidwojfeo');

		// return this.httpClient.put(
		// 	'https://ng-recipe-book-cddcf.firebaseio.com/recipes.json',
		// 	this.recipeService.getRecipes(),
		// 	{
		// 		observe: 'body',
		// 		params: new HttpParams().set('auth', token)
		// 		// headers: headers
		// 	}
		// );

		const req = new HttpRequest(
			'PUT',
			'https://ng-recipe-book-cddcf.firebaseio.com/recipes.json',
			this.recipeService.getRecipes(),
			{
				reportProgress: true,
			}
		);

		return this.httpClient.request(req);
	}

	getRecipes() {
		// this.httpClient.get<Recipe[]>(
		// 	'https://ng-recipe-book-cddcf.firebaseio.com/recipes.json?auth=' + token,
		this.httpClient.get<Recipe[]>(
			'https://ng-recipe-book-cddcf.firebaseio.com/recipes.json',
			{
				observe: 'body', //mettendo responseprendo tutta la risposta e non solo il body
				responseType: 'json', //posso specificare altri tipi (text, blob, arraybuffer)
			}
		).map(
			(recipes) => {
				for (let recipe of recipes) {
					if (!recipe['ingredients']) {
						recipes['ingredients'] = [];
					}
				}

				return recipes;
			}
		).subscribe(
			(recipes: Recipe[]) => {
				this.recipeService.setRecipes(recipes);
			}
		);
	}
}
