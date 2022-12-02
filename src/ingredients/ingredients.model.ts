import { AllowNull, Column, Model, Table, Unique } from 'sequelize-typescript';

@Table
export class Ingredient extends Model {
  @AllowNull(false)
  @Unique
  @Column
  name: string;
}
