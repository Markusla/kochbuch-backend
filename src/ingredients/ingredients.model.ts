import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Ingredient extends Model {
  @Column
  name: string;
}
