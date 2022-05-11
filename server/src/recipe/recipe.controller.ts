import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}
  @Get('')
  async getRecipies() {
    return await this.recipeService.getRecipies();
  }
  @Get('saved')
  async getSavedRecipies() {
    return await this.recipeService.getSavedRecipes();
  }
  @Get('/:id')
  async getRecipeById(@Param('id', ParseIntPipe) id: number) {
    return await this.recipeService.getRecipeById(id);
  }

  @Post('save/:id')
  async saveRecipie(@Param('id', ParseIntPipe) id: number) {
    return await this.recipeService.saveRecipe(id);
  }
}
