import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { getFormErrors } from '../../assets/utils/formFunctions'
import { throwError } from 'rxjs';

// import { RecipeDetails } from '../../models/recipe'

@Injectable({
  providedIn: 'root'
})
export class CreateRecipeService {

  url:string = 'http://localhost:3001/recipe/'

  constructor(private httpClient:HttpClient) { }


  createRecipe(form:any):Observable<any> {
    return this.httpClient.post<any>(this.url, form)
  }
}