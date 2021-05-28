import { Component, OnInit } from '@angular/core';
//Importo modelo de diet types
import { DietType } from '../../../../models/dietType'
//Importo la store
import { Store, select } from '@ngrx/store'
//Importo la accion
import { GetTypes, CreateRecipe, CreateRecipeError } from '../../../store/app.actions'
//Importo el selector
import { getDietTypesSelector } from '../../../store/app.selectors'
//Importo las clases para crear los forms
import { FormGroup, FormControl } from '@angular/forms';
//Importo funciones personalizadas que hice para modificar o crear informacion
import { createArrayFromNumber, manageDietType } from '../../../../assets/utils/arrayFunctions'
import { getFormErrors } from '../../../../assets/utils/formFunctions'
//Validadores personalizados
import { requireValidator ,onlyContainValidator, lengthValidator, isURLValidator, emptyArrayValidator } from './create-recipe-validators.directive'


@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  constructor(private store: Store<any>) { }

  newRecipeForm = new FormGroup({
    title: new FormControl('', [requireValidator('recipe name'), 
                                onlyContainValidator(/^[a-zA-Z\s()]*$/, 'Recipe name'), 
                                lengthValidator(/^.{8,}$/, 'Recipe name', '8')]),
    summary: new FormControl('', [requireValidator('summary'),
                                  lengthValidator(/^.{100,}$/, 'Summary', '100')
    ]),
    instructions: new FormControl('', [requireValidator('instructions description'),
                                       lengthValidator(/^.{100,}$/, 'Instructions', '100')
    ]),
    spoonacularScore: new FormControl('', requireValidator('score')),
    healthScore: new FormControl('', requireValidator('health score')),
    image: new FormControl('', [requireValidator('recipe image URL'),
                                isURLValidator('Image URL')
    ]),
    types: new FormControl([], emptyArrayValidator()),
  });

  scoresArray: number[] = createArrayFromNumber(10).map(n => n*10)
  imagePeviewLink: string;
  dietTypes$: DietType[];

  ngOnInit(): void {
    //Aqui subscribo mi variable al store
    this.store.pipe(select(getDietTypesSelector)).subscribe(data => this.dietTypes$ = data)
    if(this.dietTypes$.length === 0) {
      this.store.dispatch(GetTypes())
    }
  }

  onSubmit() {
    const errors = getFormErrors(this.newRecipeForm)
    if(errors.length === 0) {
      this.store.dispatch(CreateRecipe({form: {...this.newRecipeForm.value}}))
      this.imagePeviewLink = ''
      return this.newRecipeForm.setValue({
        title: '',
        summary: '',
        instructions: '',
        spoonacularScore: '',
        healthScore: '',
        image: '',
        types: [],
      })
    }
    this.store.dispatch(CreateRecipeError({error: [...errors]}))
  }

  setScore(number) {
    this.newRecipeForm.patchValue({spoonacularScore: number})
  }

  setHealthScore(number) {
    this.newRecipeForm.patchValue({healthScore: number})
  }

  setImagePreview(link) {
    this.imagePeviewLink = link
  }

  mangeDietTypes(e) {
    const newDietTypesArray = manageDietType(e.target.value, this.newRecipeForm.value.types)
    this.newRecipeForm.patchValue({types: newDietTypesArray})
    e.target.selectedIndex = 0
  }

}
