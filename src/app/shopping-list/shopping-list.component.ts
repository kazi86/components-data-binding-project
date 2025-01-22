import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public ingredients: Ingredient[] = [];

  constructor() { }

  public ngOnInit() {}

  public onItemAddedToShoppingList (event :Ingredient[]){

    this.ingredients = event;

  }

}
