import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput : ElementRef <HTMLInputElement>;

  @ViewChild('amountInput') amountInput: ElementRef <HTMLInputElement>;

  @Output() listOfShoppedItems : EventEmitter<Ingredient[]> =new EventEmitter();

  public shoppingList : Ingredient[] = [];

  constructor() {}

  public ngOnInit() {}

  public onAddItemToShoppingList(){

    let item = {name: this.nameInput?.nativeElement?.value, amount: Number(this.amountInput?.nativeElement?.value)};

    this.shoppingList.push(item);

    this.listOfShoppedItems.emit(this.shoppingList);

    this.nameInput.nativeElement.value = "";

    this.amountInput.nativeElement.value = null;

  }


}
