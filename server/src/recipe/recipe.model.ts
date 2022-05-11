import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({ underscored: true })
export class Recipe extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true })
  recipeId: number;
  @Column({ type: DataType.STRING })
  title: string;
  @Column({ type: DataType.INTEGER })
  cookTime: number;
  @Column({ type: DataType.TEXT })
  description: string;
  @HasMany(() => Instruction)
  instructions: Instruction[];
}
@Table({ underscored: true })
export class Instruction extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true })
  id: number;
  @Column({ type: DataType.STRING })
  displayText: string;
  @Column({ type: DataType.INTEGER })
  position: number;
  @ForeignKey(() => Recipe)
  recipeId: number;
  @BelongsTo(() => Recipe)
  recipe: Recipe;
}
