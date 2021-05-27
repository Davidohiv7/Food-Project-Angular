import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { Recipe } from '../../models/recipe'
//Importo la store
import { Store } from '@ngrx/store'
//Importo la action
import { SetLoading } from '../store/app.actions'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  url:string = 'http://localhost:3001/recipes'

  constructor(private httpClient:HttpClient, private store: Store<any>) { }


  getRecipes(searchedRecipe:string):Observable<Recipe[]> {
    this.store.dispatch(SetLoading({loadingState: true}))
    return this.httpClient.get<Recipe[]>(this.url + '?name=' + searchedRecipe)
  }
}
