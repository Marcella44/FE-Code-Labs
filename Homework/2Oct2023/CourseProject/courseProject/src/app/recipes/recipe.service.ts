import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://images.squarespace-cdn.com/content/v1/54374856e4b087e24b9e546b/1674605712346-R1P0RZ9KSK4G6EVONDDL/sponge+cake+%289+of+10%29.jpeg?format=1500w', [
      new Ingredient('Meat', 1),
      new Ingredient('French Fires', 20)
    ]),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://images.squarespace-cdn.com/content/v1/54374856e4b087e24b9e546b/1674605712346-R1P0RZ9KSK4G6EVONDDL/sponge+cake+%289+of+10%29.jpeg?format=1500w', [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //return new array which is a copy of the RecipeService
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

