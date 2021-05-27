import { Component, OnInit } from '@angular/core';
//Importo mis clases precreadas
import { Recipe } from '../../../models/recipe'
import { DietType } from '../../../models/dietType'
//Importo la store
import { Store, select } from '@ngrx/store'
//Importo las actions que despachare
import { GetTypes, SortRecipes, FilterRecipes, RemovePreviousPage, GetRecipes } from '../../store/app.actions'
//Importo el selector
import { getDietTypesSelector, getSortedRecipesListSelector, getRecipesListSelector } from '../../store/app.selectors'
//Importo la funcion organizadora
import { sortArray, filterArray } from '../../../assets/utils/sortAndFilterFunctions'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  //Aqui obtengo el valor del estado de NgRx que necesito
  dietTypes$: DietType[];
  recipesList$: Recipe[];
  sortedRecipesList$: Recipe[];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(GetTypes())
    this.store.pipe(select(getDietTypesSelector)).subscribe(data => this.dietTypes$ = data)
    this.store.pipe(select(getRecipesListSelector)).subscribe(data => this.recipesList$ = data)
    this.store.pipe(select(getSortedRecipesListSelector)).subscribe(data => this.sortedRecipesList$ = data)
  }

  //Recordar asignarle al value del botton el nombre tittle, healthscore, etc, que este es uno de los parametros de la funcion organizadora
  SortNormal(e) {
    const newSortedArray = sortArray([...this.sortedRecipesList$], e.target.value, true)
    this.store.dispatch(SortRecipes({newSortedRecipeList: newSortedArray}))
  }

  SortReverse(e) {
    //Le tengo que enviar una copia del sortedRecipeList$, porque este esta es ligado al objeto del estado, y estos son SOLO de lectura
    const newSortedArray = sortArray([...this.sortedRecipesList$], e.target.value, false)
    this.store.dispatch(SortRecipes({newSortedRecipeList: newSortedArray}))
  }

  FilterRecipes(e) {
    this.store.dispatch(RemovePreviousPage())
    //Aqui el valor debo asignarselo a cada uno
    const newFilteredArray = filterArray([...this.recipesList$], e.target.value)
    setTimeout(() => this.store.dispatch(FilterRecipes({newFilteredRecipeList: newFilteredArray})), 10); 
  }

  GetAllRecipes() {
    this.store.dispatch(GetRecipes({queryName: ''}))
  }

}
