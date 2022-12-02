import { DataTypes } from 'sequelize';
import { AllowNull, Column, Model, Table, Unique } from 'sequelize-typescript';

@Table
export class Recipe extends Model {
  @AllowNull(false)
  @Unique
  @Column
  title: string;

  @Column(DataTypes.TEXT)
  content: string;
}
