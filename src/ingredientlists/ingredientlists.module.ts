import { Module } from '@nestjs/common';
import { IngredientListsService } from './ingredientlists.service';
import { IngredientListsController } from './ingredientlists.controller';
import { IngredientList } from './ingredientlists.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([IngredientList])],
  controllers: [IngredientListsController],
  providers: [IngredientListsService],
})
export class IngredientListsModule {}
