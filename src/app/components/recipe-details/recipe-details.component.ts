import { Component, OnInit } from '@angular/core';
import { capitalizeArray } from '../../../assets/utils/stringFunctions'
import { createArrayFromNumber } from '../../../assets/utils/arrayFunctions'
import { RecipeDetailsService } from '../../services/recipe-details.service'
//Importo el RouteActive para poder tomar los params de la ryta
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  paramsID: string;
  recipeDetails: any;
  dietsSign: string;
  scoreArray: number[];
  healthScoreArray: number[];
  errorMesage: string;

  constructor(private route: ActivatedRoute, private recipeDetailService: RecipeDetailsService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.paramsID = routeParams.get('id');
    if(this.paramsID) {
      this.recipeDetailService.getRecipeDetails(this.paramsID).subscribe(details => {
        this.recipeDetails = details
        this.dietsSign = capitalizeArray(details.diets).join(', ')
        this.scoreArray = createArrayFromNumber(Math.round(details.spoonacularScore / 10))
        this.healthScoreArray = createArrayFromNumber(Math.round(details.healthScore / 10))
      },
      error => {
        this.errorMesage = error.error.message
        this.recipeDetails = true
      });
    }
    
  }

}
