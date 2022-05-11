import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/sequelize';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { InstructionDto, RecipeDto } from './recipe.dto';
import { Instruction, Recipe, SavedRecipe } from './recipe.model';

@Injectable()
export class RecipeService {
  constructor(
    @InjectModel(Recipe) private recipeModel: typeof Recipe,
    @InjectModel(Instruction) private instructionModel: typeof Instruction,
    @InjectModel(SavedRecipe) private savedRecipe: typeof SavedRecipe,
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async getSavedRecipes() {
    return await this.savedRecipe.findAll({
      include: {
        model: Recipe,
        include: [Instruction],
      },
    });
  }

  async getRecipeById(recipeId: number) {
    return await this.recipeModel.findOne({ where: { recipeId } });
  }

  async saveRecipe(recipeId: number) {
    return await this.savedRecipe.create({ recipeId });
  }

  async seedRecipes(): Promise<any> {
    const options = this.configService.get('options');
    const res: any = await lastValueFrom(
      this.httpService.request(options).pipe(map((res) => res.data)),
    );
    this.addToModel(res);
    return res;
  }

  private async addToModel(res: any) {
    for (const recipe of res.results) {
      await this.insertRecipe({
        recipeId: recipe.id,
        title: recipe.name,
        description: recipe.description,
        cookTime:
          recipe.cook_time_minutes ||
          recipe.total_time_minutes ||
          recipe.prep_time_minutes,
      });
      this.toInstruction(recipe.instructions, recipe.id);
    }
  }

  private toInstruction(instructions: any, recipeId: number) {
    for (const instruction of instructions) {
      console.log(instruction);
      this.addInstruction({
        recipeId,
        position: instruction.position,
        displayText: instruction.display_text,
      });
    }
  }
  async insertRecipe(recipe: RecipeDto) {
    return await this.recipeModel.create({ ...recipe });
  }
  async addInstruction(instruction: InstructionDto) {
    return await this.instructionModel.create({ ...instruction });
  }

  async getRecipies() {
    const recipes = await this.recipeModel.findAll();
    //check if data exists.
    if (recipes.length) {
      return recipes;
    }
    this.seedRecipes();
    return await this.recipeModel.findAll();
  }
}
