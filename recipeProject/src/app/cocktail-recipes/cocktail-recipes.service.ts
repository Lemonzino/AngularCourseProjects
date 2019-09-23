import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import 'rxjs/Rx';
import { CocktailRecipe } from "./cocktail-recipe.model";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CocktailRecipesService {
    cocktailsList: Map<string, CocktailRecipe> = new Map();

    cocktailsListLoaded = new Subject<Map<string, CocktailRecipe>>();
    selectedCocktail = new Subject<CocktailRecipe>();

    constructor(private http: HttpClient) {}

    getCocktailsList() {
        return this.cocktailsList;
    }

    getIngredients() {
        return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
    }

    getCategories() {
        return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
    }

    getGlasses() {
        return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list");
    }

    searchRecipe(index: string){
        return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php", {
            params: {
                i: index
            }
        }).subscribe(
            (response: string) => {
                if(response['drinks'] != null) {
                    this.getDrinkFromJson(response['drinks'][0]);
                    this.selectedCocktail.next(this.cocktailsList.get(index));
                }
            }
        );
    }

    searchRecipes(filter: string, value: string) {
        if(filter == 's') {
            return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?" + filter + "=" + value).map(
                (response: string) => {
                    if(response['drinks'] != null) {
                        this.cocktailsList.clear();
                        this.getDrinksFromJson(response);
                        this.cocktailsListLoaded.next(this.cocktailsList);
                        return(false);
                    }
                }
            );
        } else if(filter == 'i' || filter == 'c' || filter == 'g'){
            return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?" + filter + "=" + value).map(
                (response: string) => {
                    if(response['drinks'] != null) {
                        this.cocktailsList.clear();
                        this.getDrinksFromJson(response);
                        this.cocktailsListLoaded.next(this.cocktailsList);
                        return(false);
                    }
                }
            );
        }
    }

    private getDrinksFromJson(response: string) {
        for(let drink of response['drinks']) {
            this.getDrinkFromJson(drink);
        }
    }

    private getDrinkFromJson(response: string) {
        let ingredients: {ingredName: string, ingredAmount: string}[] = [];
        let index: number = 1;
        let done: boolean = false;
        while(!done) {
            if(
                (response['strIngredient' + index] == undefined ||
                response['strIngredient' + index] == null ||
                response['strIngredient' + index] == "" ||
                response['strIngredient' + index] == " ") &&
                index == 1
            ) {
                ingredients = undefined;
                break;
            }

            if(
                response['strIngredient' + index] == undefined ||
                response['strIngredient' + index] == null ||
                response['strIngredient' + index] == "" ||
                response['strIngredient' + index] == " "
            ) {
                break;
            }

            ingredients.push({
                ingredName: response['strIngredient' + index],
                ingredAmount: response['strMeasure' + index]
            });

            index += 1;
        }

        this.cocktailsList.set(response['idDrink'], new CocktailRecipe(
            response['idDrink'],
            response['strDrink'], 
            response['strDrinkThumb'], 
            response['strInstructions'],
            response['strCategory'],
            response['strAlcoholic'],
            response['strGlass'],
            ingredients));
    }
}