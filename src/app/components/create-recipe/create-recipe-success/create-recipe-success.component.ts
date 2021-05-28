import { Component, OnInit } from '@angular/core';
//Importo la store
import { Store, select } from '@ngrx/store'
//Importo el selector
import { getCreateRecipeResponses } from '../../../store/app.selectors'
//Importo la accion para cerrar el banner
import { CreateRecipeSuccess } from '../../../store/app.actions'

@Component({
  selector: 'app-create-recipe-success',
  templateUrl: './create-recipe-success.component.html',
  styleUrls: ['./create-recipe-success.component.css']
})
export class CreateRecipeSuccessComponent implements OnInit {

  successData$: any

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.pipe(select(getCreateRecipeResponses)).subscribe(r => this.successData$ = r.success)
  }

  onClick() {
    this.store.dispatch(CreateRecipeSuccess({response: false}))
  }

}
