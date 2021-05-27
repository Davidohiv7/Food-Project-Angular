import { Component, OnInit } from '@angular/core';
//Importo la Store
import { Store, select } from '@ngrx/store'
//Importo las acciones
import { GetRecipes, SetSign } from '../../../store/app.actions'
//Importo los selectores
import { getSignSelector } from '../../../store/app.selectors'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {

  // Aqui cree una especie de estado o variable, que esta sincornizado con el formulario en el .html
  searchedRecipe:string = ''
  signMessage$:string;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.pipe(select(getSignSelector)).subscribe(data => this.signMessage$ = data)
  }

  onClickSearch() {
    if(this.searchedRecipe) {
      return this.store.dispatch(GetRecipes({queryName: this.searchedRecipe}))
    }
    this.store.dispatch(SetSign({signMessage: 'The searchbar is empty, please write a recipe name'}))
    setTimeout(() => this.store.dispatch(SetSign({signMessage: ''})), 5000); 
  }

  closeSign() {
    this.store.dispatch(SetSign({signMessage: ''}))
  }
}
 