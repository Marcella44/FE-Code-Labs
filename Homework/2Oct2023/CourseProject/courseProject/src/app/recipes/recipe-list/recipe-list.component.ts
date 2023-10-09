import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://images.squarespace-cdn.com/content/v1/54374856e4b087e24b9e546b/1674605712346-R1P0RZ9KSK4G6EVONDDL/sponge+cake+%289+of+10%29.jpeg?format=1500w'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://images.squarespace-cdn.com/content/v1/54374856e4b087e24b9e546b/1674605712346-R1P0RZ9KSK4G6EVONDDL/sponge+cake+%289+of+10%29.jpeg?format=1500w')
  ];

  constructor() {}

  ngOnInit() {


  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
