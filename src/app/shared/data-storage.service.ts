import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {

    const token = this.authService.getToken();

    return this.http.put('https://ng-recipe-book-9b5fe.firebaseio.com/recipe.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {

    const token = this.authService.getToken();

    return this.http.get('https://ng-recipe-book-9b5fe.firebaseio.com/recipe.json?auth=' + token)
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
