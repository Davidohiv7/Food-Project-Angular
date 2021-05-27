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
    const errors = getFormErrors(form)
    if(errors.length > 0) {
        return throwError(getFormErrors(form))
    }
    console.log(errors)
    return this.httpClient.post<any>(this.url, form.value)
  }
}