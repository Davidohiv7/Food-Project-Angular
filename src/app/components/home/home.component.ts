import { Component, OnInit } from '@angular/core';
//Importo el RouteActive para poder tomar los params de la ryta
import { ActivatedRoute } from '@angular/router';
//Importo la store
import { Store, select } from '@ngrx/store'
//Importo el selector
import { getLoadingSelector, getRecipesInPageSelector } from '../../store/app.selectors'
//Importo action
import { GetRecipes } from '../../store/app.actions'
//Importo el modelo
import { Recipe } from '../../../models/recipe'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipes$: Recipe[];
  paramsID: string;
  isLoading$: boolean;

  constructor(private route: ActivatedRoute, private store: Store<any>) { }

  ngOnInit(): void {
    //Aqui subscribo mi variable al store
    this.store.pipe(select(getLoadingSelector)).subscribe(data => this.isLoading$ = data)
    this.store.pipe(select(getRecipesInPageSelector)).subscribe(data => this.recipes$ = data)
    if(this.recipes$ && this.recipes$.length === 0) {
      this.store.dispatch(GetRecipes({queryName: ''}))
    }
    const routeParams = this.route.snapshot.paramMap;
    this.paramsID = routeParams.get('id');
  }


}
