import { createReducer, on } from '@ngrx/store';
import { Recipe } from '../../models/recipe'
import { DietType } from '../../models/dietType'
import { AddGottenRecipes, ErrorGettingRecipes, UpdatePage, AddGottenDietTypes, ErrorGettingDietTypes, SortRecipes, FilterRecipes, SetLoading, RemovePreviousPage, SetSign, CreateRecipeError, CreateRecipeSuccess} from './app.actions'

export interface appState {
    recipesList: Recipe[];
    sortedRecipeList: Recipe[];
    typesList: DietType[];
    pages: any;
    loading: boolean;
    searchSign: string;
    createRecipeResponses: any;
}

const initialState: appState = {
    recipesList: [],
    sortedRecipeList: [],
    typesList: [],
    pages: {
        active: false,
        recipesInPage: [],
        numerOfPages: 0,
        page: 0
    },
    loading: false,
    searchSign: '',
    createRecipeResponses: {
        success: false,
        error: false,
    }
}


export const MainReducer = createReducer(initialState, 
    on(AddGottenRecipes, (state, action) => (
        {
            ...state, 
            recipesList: action.recipes, 
            sortedRecipeList: action.recipes,
            pages: {
                active: true,
                numerOfPages: Math.ceil(action.recipes.length / 9),
                page: 1,
                recipesInPage: action.recipes.slice(0 , 9)
            },
            loading: false
        })
    ),
    on(ErrorGettingRecipes, (state, action) => (
        {
            ...state, 
            searchSign: action.message,
            loading: false
        })
    ),
    on(UpdatePage, (state, action) => (
        {
            ...state, 
            pages: {
                ...state.pages,
                page: action.pageNumber,
                recipesInPage: state.sortedRecipeList.slice((action.pageNumber-1) * 9,(action.pageNumber) * 9)
            }
        })
    ),
    on(AddGottenDietTypes, (state, action) => (
        {
            ...state, 
            typesList: action.dietTypes, 
        })
    ),
    on(ErrorGettingDietTypes, (state, action) => (
        {
            ...state, 
            searchSign: action.message
        })
    ),
    on(SortRecipes, (state, action) => (
        {
            ...state, 
            sortedRecipeList: action.newSortedRecipeList,
            pages: {
                ...state.pages,
                recipesInPage: action.newSortedRecipeList.slice((state.pages.page-1) * 9,(state.pages.page) * 9)
            }
        })
    ),
    on(FilterRecipes, (state, action) => (
        {
            ...state,
            sortedRecipeList: action.newFilteredRecipeList,
            pages: {
              active: true,
              numerOfPages: Math.ceil(action.newFilteredRecipeList.length / 9),
              page: 1,
              recipesInPage:  action.newFilteredRecipeList.slice(0, 9)
            },
            loading: false
        })
    ),
    on(SetLoading, (state, action) => (
        {
            ...state,
            loading: action.loadingState
        })
    ),
    on(RemovePreviousPage, (state, action) => (
        {
            ...state,
            pages: {
                ...state.pages,
                recipesInPage: []
              },
        })
    ),
    on(SetSign, (state, action) => (
        {
            ...state,
            searchSign: action.signMessage
        })
    ),
    on(CreateRecipeSuccess, (state, action) => (
        {
            ...state,
            createRecipeResponses: {
                success: action.response,
                error: false,
            }
        })
    ),
    on(CreateRecipeError, (state, action) => (
        {
            ...state,
            createRecipeResponses: {
                success: false,
                error: action.error,
            }
        })
    ),
)
