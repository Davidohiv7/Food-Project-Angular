import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators';

// import { RecipeDetails } from '../../models/recipe'

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailsService {

  url:string = 'http://localhost:3001/recipes/'

  constructor(private httpClient:HttpClient) { }


  getRecipeDetails(recipeID:string):Observable<any> {
    return this.httpClient.get<any>(this.url + recipeID)
  }
}
