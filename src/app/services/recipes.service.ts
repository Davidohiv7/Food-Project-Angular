import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { Recipe } from '../../models/recipe'

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  url:string = 'http://localhost:3001/recipes'

  constructor(private httpClient:HttpClient) { }


  getRecipes(searchedRecipe:string):Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this.url + '?name=' + searchedRecipe)
  }
}
