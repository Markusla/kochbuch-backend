import { Injectable } from '@nestjs/common';

import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';

import { InjectModel } from '@nestjs/sequelize';
import { Ingredient } from './ingredients.model';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectModel(Ingredient)
    private IngredientModel: typeof Ingredient,
  ) {}

  create(createIngredientDto: CreateIngredientDto) {
    return 'This action adds a new ingredient';
  }

  findAll(): Promise<Ingredient[]> {
    // return `This action returns all ingredients`;
    return this.IngredientModel.findAll();
  }

  findOne(id: number): Promise<Ingredient> {
    // return `This action returns a #${id} ingredient`;
    return this.IngredientModel.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return `This action updates a #${id} ingredient`;
  }

  async remove(id: number): Promise<void> {
    // return `This action removes a #${id} ingredient`;
    const user = await this.findOne(id);
    await user.destroy();
  }
}
