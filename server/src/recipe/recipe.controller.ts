import { Controller, Get } from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}
  @Get('')
  async getRecipies() {
    return await this.recipeService.getRecipies();
  }
}
