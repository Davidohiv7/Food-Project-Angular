import { Component, OnInit } from '@angular/core';
//Importo la store
import { Store, select } from '@ngrx/store'
//Importo el selector
import { getCreateRecipeResponses } from '../../../store/app.selectors'
//Importo la accion para cerrar el banner
import { CreateRecipeError } from '../../../store/app.actions'
@Component({
  selector: 'app-create-recipe-error',
  templateUrl: './create-recipe-error.component.html',
  styleUrls: ['./create-recipe-error.component.css']
})
export class CreateRecipeErrorComponent implements OnInit {

  constructor(private store: Store<any>) { }

  errorData$: any

  ngOnInit(): void {
    this.store.pipe(select(getCreateRecipeResponses)).subscribe(r => {this.errorData$ = r.error})
  }

  onClick() {
    this.store.dispatch(CreateRecipeError({error: false}))
  }

}
