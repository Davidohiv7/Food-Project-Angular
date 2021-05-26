import { Component, OnInit } from '@angular/core';
//Importo la clase de mis recetas
import { Recipe } from '../../../models/recipe'
//Importo la store
import { Store, select } from '@ngrx/store'
//Importo la action que despachare
import { GetRecipes } from '../../store/app.actions'
//Importo el selector
import { getRecipesInPageSelector } from '../../store/app.selectors'



@Component({
  selector: 'app-recipe-cards',
  templateUrl: './recipe-cards.component.html',
  styleUrls: ['./recipe-cards.component.css']
})
export class RecipeCardsComponent implements OnInit {

  //Aqui obtengo el valor del estado de NgRx que necesito
  recipes$: Recipe[];

  //Aqui en el constructor inyecto el servicio, para poder acceder a las variables y funciones del servicio
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    //Aqui subscribo mi variable al store
    this.store.pipe(select(getRecipesInPageSelector)).subscribe(data => this.recipes$ = data)
    //Aqui le digo que cada vez que renderice, invoque la funcion de obtener recetas. Pero solo si no hay
    if(this.recipes$ && this.recipes$.length === 0) {
      this.store.dispatch(GetRecipes({queryName: ''}))
    } 
  }

}
