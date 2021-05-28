import { Component, OnInit } from '@angular/core';
//Importo la store
import { Store, select } from '@ngrx/store'
//Importo el selector
import { getCreateRecipeResponses } from '../../store/app.selectors'

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  constructor(private store: Store<any>) { }

  createRecipesResponse$: any;

  ngOnInit(): void {
    //Aqui subscribo mi variable al store
    this.store.pipe(select(getCreateRecipeResponses)).subscribe(r => this.createRecipesResponse$ = r)
  }

}
