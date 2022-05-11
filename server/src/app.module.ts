import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Instruction, Recipe } from './recipe/recipe.model';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'postgres',
      username: 'postgres',
      database: 'recipe',
      models: [Recipe, Instruction],
      synchronize: true,
      autoLoadModels: true,
    }),
    RecipeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
