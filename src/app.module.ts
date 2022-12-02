import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientListsModule } from './ingredientlists/ingredientlists.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      // SQLite only
      storage: 'database.sqlite',
      autoLoadModels: true,
      synchronize: true,
    }),
    IngredientsModule,
    IngredientListsModule,
    RecipesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
