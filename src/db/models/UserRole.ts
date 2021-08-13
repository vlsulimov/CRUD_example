import {
  Model,
  Table,
  Column,
  ForeignKey,
  PrimaryKey,
  AutoIncrement,
  DataType,
  // BelongsTo,
  AllowNull,
} from 'sequelize-typescript';
import { User, Role } from '.';

@Table({
  timestamps: true,
  tableName: 'userRole',
})
export class UserRole extends Model<UserRole> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  public id!: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  userId!: number;

  @ForeignKey(() => Role)
  @AllowNull(false)
  @Column(DataType.BIGINT)
  roleId!: number;

  @AllowNull(false)
  @Column(DataType.DATE)
  createdAt!: Date;

  @AllowNull(false)
  @Column(DataType.DATE)
  updatedAt!: Date;

  // @BelongsTo(() => User)
  // user!: User;

  // @BelongsTo(() => Role)
  // role!: Role;
}
