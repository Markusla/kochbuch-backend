import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IngredientList } from './ingredientlists.model';

@Injectable()
export class IngredientListsService {
  constructor(
    @InjectModel(IngredientList)
    private IngredientListModel: typeof IngredientList,
  ) {}

  create(createIngredient: IngredientList): Promise<IngredientList> {
    return this.IngredientListModel.create({ ...createIngredient });
  }

  findAll(): Promise<IngredientList[]> {
    return this.IngredientListModel.findAll();
  }

  findOne(id: number): Promise<IngredientList> {
    return this.IngredientListModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updateIngredient: IngredientList,
  ): Promise<IngredientList> {
    await this.IngredientListModel.update(updateIngredient, {
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
