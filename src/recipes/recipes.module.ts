import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { Recipe } from './recipe.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Recipe])],
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}
