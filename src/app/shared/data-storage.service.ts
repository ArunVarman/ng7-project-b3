import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put('https://ng-recipe-book-9b5fe.firebaseio.com/recipe.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-9b5fe.firebaseio.com/recipe.json')
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
