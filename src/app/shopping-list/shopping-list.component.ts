import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() {
  }
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    console.log('ing pushes');
  }
  onIngridientDelete() {
    this.ingredients.pop();
    console.log('delete');
  }

  onIngridientClear() {
    this.ingredients.length = 0;
  }
  ngOnInit() {
  }
}
