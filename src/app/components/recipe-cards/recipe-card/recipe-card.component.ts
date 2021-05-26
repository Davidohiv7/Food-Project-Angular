import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../../../models/recipe'

import { capitalizeArray } from '../../../../assets/utils/stringFunctions'

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: Recipe = new Recipe()
  detailsURL:string = `/home/`
  dietsSign: string;
  
  constructor() { }


  ngOnInit(): void {
    this.detailsURL = this.detailsURL + this.recipe.id
    this.dietsSign = capitalizeArray(this.recipe.diets).join(', ')
  }

}
