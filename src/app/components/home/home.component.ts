import { Component, OnInit } from '@angular/core';
//Importo el modelo de los detalles de la receta
import { RecipeDetails } from '../../../models/recipe'
//Importo el RouteActive para poder tomar los params de la ryta
import { ActivatedRoute } from '@angular/router';
//Importo el servicio para hacer el request de los detalles de la receta
import { RecipeDetailsService } from '../../services/recipe-details.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  paramsID: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.paramsID = routeParams.get('id');
  }


}
