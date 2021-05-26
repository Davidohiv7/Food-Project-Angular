import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { DietType } from '../../models/dietType'

@Injectable({
  providedIn: 'root'
})
export class RecipeTypesService {

  url:string = 'http://localhost:3001/types/'

  constructor(private httpClient:HttpClient) { }

  getDietTypes():Observable<DietType[]> {
    return this.httpClient.get<DietType[]>(this.url)
  }
}
