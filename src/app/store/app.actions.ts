import { Action, createAction, props } from '@ngrx/store'
//El recipe lo usare mas adelante, aqui solo necesito usar una string
import { Recipe } from '../../models/recipe'
import { DietType } from '../../models/dietType'


//AQUI CREO LOS ACTION TYPES
export const GET_API_RECIPES = '[app] GET_API_RECIPES'
export const ADD_GOTTEN_RECIPES = '[app] ADD_GOTTEN_RECIPES'
export const ERROR_GETTING_RECIPES = '[app] ERROR_GETTING_RECIPES'

export const UPDATE_PAGE = '[app] UPDATE_PAGE'

export const GET_API_DIET_TYPES = '[app] GET_API_DIET_TYPES'
export const ADD_GOTTEN_DIET_TYPES = '[app] ADD_GOTTEN_DIET_TYPES'
export const ERROR_GETTING_DIET_TYPES = '[app] ERROR_GETTING_DIET_TYPES'

export const SORT_RECIPES = '[app] SORT_RECIPES'
export const FILTER_RECIPES = '[app] FILTER_RECIPES'

export const SET_LOADING = '[app] SET_LOADING'

export const REMOVE_PREVIOUS_PAGE = '[app] REMOVE_PREVIOUS_PAGE'

export const SET_SIGN = '[app] SET_SIGN'

//AQUI CREO LAS ACTIONS

// ACTION: Solicitud API de recetas ---------------------------------------------------------------------------------
//Action para despachar desde componente y que sea interceptada por el Effect en el proceso de obtener las recetas
export const GetRecipes = createAction(GET_API_RECIPES, props<{queryName:string}>())
//Actions para actualizar el estado global, la cual la despacha el Effect, NO los componentes
export const AddGottenRecipes = createAction(ADD_GOTTEN_RECIPES, props<{recipes:Recipe[]}>())
export const ErrorGettingRecipes = createAction(ERROR_GETTING_RECIPES, props<{message:string}>())
// ----------------------------------------------------------------------------------------------------------------- 

//Actions para actualizar las recetas que se estan mostrando
export const UpdatePage = createAction(UPDATE_PAGE, props<{pageNumber:number}>())

// ACTION: Solicitud API de tipos de recetas -----------------------------------------------------------------------
//Action para despachar desde componente y que sea interceptada por el Effect en el proceso de obtener los tipos de receta
export const GetTypes = createAction(GET_API_DIET_TYPES)
//Actions para actualizar el estado global, la cual la despacha el Effect, NO los componentes
export const AddGottenDietTypes = createAction(ADD_GOTTEN_DIET_TYPES, props<{dietTypes:DietType[]}>())
export const ErrorGettingDietTypes = createAction(ERROR_GETTING_DIET_TYPES, props<{message:string}>())
// ----------------------------------------------------------------------------------------------------------------- 

//Action para organizar las recetas 
export const SortRecipes = createAction(SORT_RECIPES, props<{newSortedRecipeList: any[]}>())
//Action para filtrar las recetas 
export const FilterRecipes = createAction(FILTER_RECIPES, props<{newFilteredRecipeList: any[]}>())
//Action para modificar el Loading
export const SetLoading = createAction(SET_LOADING, props<{loadingState: boolean}>())
//Action para hacer las transiciones
export const RemovePreviousPage = createAction(REMOVE_PREVIOUS_PAGE)
//Action para hacer las transiciones
export const SetSign = createAction(SET_SIGN, props<{signMessage: string}>())