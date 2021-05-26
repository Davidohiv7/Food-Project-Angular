import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component'
import { HomeComponent } from './components/home/home.component'
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component'

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  }, 
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home/:id',
    component: HomeComponent
  }, 
  {
    path: 'createRecipe',
    component: CreateRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
