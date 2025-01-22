import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{

  @Output() selectedOption:EventEmitter<string> = new EventEmitter();

  public constructor() {}

  public ngOnInit(){

    this.selectedOption.emit('recipes');

  }

  public onViewRecipes(){

    this.selectedOption.emit('recipes');

  }

  public onViewShoppingList() {

    this.selectedOption.emit('shoppingList');

  }

}
