import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppEffects } from './store/app.effects'

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { SearchbarComponent } from './components/home/searchbar/searchbar.component';
import { HomeTitleComponent } from './components/home/home-title/home-title.component';
import { FiltersComponent } from './components/filters/filters.component';
import { RecipeCardsComponent } from './components/recipe-cards/recipe-cards.component';
import { PagesComponent } from './components/pages/pages.component';
import { RecipeCardComponent } from './components/recipe-cards/recipe-card/recipe-card.component';

import { MainReducer } from './store/app.reducer';
import { RecipeFormComponent } from './components/create-recipe/recipe-form/recipe-form.component';
import { CreateRecipeSuccessComponent } from './components/create-recipe/create-recipe-success/create-recipe-success.component';
import { CreateRecipeErrorComponent } from './components/create-recipe/create-recipe-error/create-recipe-error.component'


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavigationBarComponent,
    HomeComponent,
    CreateRecipeComponent,
    RecipeDetailsComponent,
    SearchbarComponent,
    HomeTitleComponent,
    FiltersComponent,
    RecipeCardsComponent,
    PagesComponent,
    RecipeCardComponent,
    RecipeFormComponent,
    CreateRecipeSuccessComponent,
    CreateRecipeErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({mainStore: MainReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([AppEffects]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
