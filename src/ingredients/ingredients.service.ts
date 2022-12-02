import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ingredient } from './ingredients.model';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectModel(Ingredient)
    private IngredientModel: typeof Ingredient,
  ) {}

  create(createIngredient: Ingredient): Promise<Ingredient> {
    return this.IngredientModel.create({ ...createIngredient });
  }

  findAll(): Promise<Ingredient[]> {
    return this.IngredientModel.findAll();
  }

  findOne(id: number): Promise<Ingredient> {
    return this.IngredientModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateIngredient: Ingredient): Promise<Ingredient> {
    await this.IngredientModel.update(updateIngredient, {
      where: {
        id: id,
      },
    });

    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const ingredient = await this.findOne(id);
    if (ingredient) {
      await ingredient.destroy();
    }
  }
}
