import { Component, OnInit } from '@angular/core';
//Esta funcion es para crear el array de numero de paginas
import { createArrayFromNumber } from '../../../assets/utils/arrayFunctions'
//Importo la store
import { Store, select } from '@ngrx/store'
//Importo la action que despachare
import { UpdatePage } from '../../store/app.actions'
//Importo el selector
import { getNumberOfPagesSelector, getActualPageSelector } from '../../store/app.selectors'


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  pageNumber$: number;
  //Aqui obtengo el valor del estado de NgRx que necesito
  pagesNumberArray$: number[];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.pipe(select(getNumberOfPagesSelector)).subscribe(data => this.pagesNumberArray$ = createArrayFromNumber(data))
    this.store.pipe(select(getActualPageSelector)).subscribe(data => this.pageNumber$ = data)
  }

  onClick(pageNumber) {
    this.store.dispatch(UpdatePage({pageNumber: pageNumber}))
  }


}
