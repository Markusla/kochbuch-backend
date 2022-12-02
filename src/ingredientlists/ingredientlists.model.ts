import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Ingredient } from 'src/ingredients/ingredients.model';
import { Recipe } from 'src/recipes/recipe.model';

@Table
export class IngredientList extends Model {
  @ForeignKey(() => Recipe)
  @Column
  receipeId: number;

  @ForeignKey(() => Ingredient)
  @Column
  ingredientId: number;

  @Column
  amount: string;
}
