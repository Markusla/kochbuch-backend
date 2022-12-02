import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe)
    private ReceipeModel: typeof Recipe,
  ) {}

  findAll(): Promise<Recipe[]> {
    return this.ReceipeModel.findAll();
  }

  findOne(id: number): Promise<Recipe> {
    return this.ReceipeModel.findOne({
      where: {
        id,
      },
    });
  }
}
