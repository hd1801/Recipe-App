export class RecipeDto {
  recipeId: number;
  title: string;
  cookTime: number;
  description: string;
}
export class InstructionDto {
  recipeId: number;
  displayText: string;
  position: number;
}
