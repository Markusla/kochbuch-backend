import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IngredientListsService } from './ingredientlists.service';
import { IngredientList } from './ingredientlists.model';

@Controller('ingredientLists')
export class IngredientListsController {
  constructor(
    private readonly ingredientListsService: IngredientListsService,
  ) {}

  @Post()
  create(@Body() createIngredient: IngredientList) {
    return this.ingredientListsService.create(createIngredient);
  }

  @Get()
  findAll() {
    return this.ingredientListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientListsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngredient: IngredientList) {
    return this.ingredientListsService.update(+id, updateIngredient);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientListsService.remove(+id);
  }
}
