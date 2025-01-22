import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isRecipesPageVisible : boolean = false;

  public isShoppingListPageVisible : boolean = false;

  constructor() {}

  public ngOnInit(){}

  public onViewPage(event: string){

    if(event === 'recipes'){

      this.isRecipesPageVisible = true;

      this.isShoppingListPageVisible = false;

    }
    else if (event === 'shoppingList'){

      this.isShoppingListPageVisible = true;

      this.isRecipesPageVisible = false;
    }

  }

}
