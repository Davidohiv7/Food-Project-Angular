export class Recipe{
    id: string = ''; 
    title: string = '';
    image: string = '';
    healthScore: number = 0;
    spoonacularScore: number = 0;
    diets: Array<string> = [];
}

export class RecipeDetails{
    id: string; 
    title: string;
    summary: string;
    instructions: string;
    image: string;
    healthScore: number;
    spoonacularScore: number;
    diets: Array<string>;
}