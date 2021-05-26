import { createFeatureSelector, createSelector } from '@ngrx/store'
import { appState } from './app.reducer'

export const getRecipesState = createFeatureSelector<appState>('mainStore')

export const getRecipesListSelector = createSelector(
    getRecipesState,
    (state: appState) => state.recipesList
);

export const getSortedRecipesListSelector = createSelector(
    getRecipesState,
    (state: appState) => state.sortedRecipeList
);

export const getRecipesInPageSelector = createSelector(
    getRecipesState,
    (state: appState) => state.pages.recipesInPage
);

export const getNumberOfPagesSelector = createSelector(
    getRecipesState,
    (state: appState) => state.pages.numerOfPages
);

export const getActualPageSelector = createSelector(
    getRecipesState,
    (state: appState) => state.pages.page
);

export const getDietTypesSelector = createSelector(
    getRecipesState,
    (state: appState) => state.typesList
);