import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RecipesService } from "../services/recipes.service";
import { RecipeTypesService } from "../services/recipe-types.service";
import { mergeMap, tap, map, catchError, timeout } from 'rxjs/operators'
import {GetRecipes ,AddGottenRecipes, ErrorGettingRecipes, GetTypes, AddGottenDietTypes, ErrorGettingDietTypes, SetSign} from './app.actions'
import { of } from 'rxjs'
import { Store } from "@ngrx/store";

@Injectable()
export class AppEffects {

    constructor(private actions$: Actions, private recipeService: RecipesService, private dietTypesService: RecipeTypesService, private store: Store<any>){}

    getRecipesEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(GetRecipes),
            // tap(() => console.log('Detecto el tipo de accion')),
            mergeMap((action) => {
                // console.log('Proceso la accion')
                return this.recipeService.getRecipes(action.queryName).pipe(
                    map(res => AddGottenRecipes({recipes: res})),
                    catchError(e => of(ErrorGettingRecipes({message: e.error.message} )).pipe(
                        tap(() => setTimeout(() => this.store.dispatch(SetSign({signMessage: ''})), 6000))
                    ))
                    // tap(() => { console.log('Termino el proceso')})
                );
            })
        );
    });

    getDietTypesEffect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(GetTypes),
            // tap(() => console.log('Detecto el tipo de accion')),
            mergeMap(() => {
                // console.log('Proceso la accion')
                return this.dietTypesService.getDietTypes().pipe(
                    map(res => AddGottenDietTypes({dietTypes: res})),
                    catchError(e => of(ErrorGettingDietTypes({message: e.message}))),
                    // tap(() => { console.log('Termino el proceso')})
                );
            })
        );
    });
}