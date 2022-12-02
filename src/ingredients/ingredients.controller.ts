import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { Ingredient } from './ingredients.model';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Post()
  create(@Body() createIngredient: Ingredient) {
    return this.ingredientsService.create(createIngredient);
  }

  @Get()
  findAll() {
    return this.ingredientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngredient: Ingredient) {
    return this.ingredientsService.update(+id, updateIngredient);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientsService.remove(+id);
  }
}
