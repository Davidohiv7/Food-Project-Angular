import { Component, OnInit } from '@angular/core';
//Importo la Store
import { Store } from '@ngrx/store'
//Importo el modelo de Recipe
import { Recipe } from '../../../../models/recipe'
//Importo las acciones
import { GetRecipes } from '../../../store/app.actions'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {

  // Aqui cree una especie de estado o variable, que esta sincornizado con el formulario en el .html
  searchedRecipe:string = ''

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    
  }

  onClick() {
    if(this.searchedRecipe) {
      return this.store.dispatch(GetRecipes({queryName: this.searchedRecipe}))
    }
    alert('The searchbar is empty')
  }
}
 