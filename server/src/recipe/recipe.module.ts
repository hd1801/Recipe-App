import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Instruction, Recipe, SavedRecipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import config from 'config/config';

@Module({
  imports: [
    SequelizeModule.forFeature([Recipe, Instruction, SavedRecipe]),
    HttpModule,
    ConfigModule.forRoot({
      load: [config],
    }),
  ],
  providers: [RecipeService],
  controllers: [RecipeController],
})
export class RecipeModule {}
