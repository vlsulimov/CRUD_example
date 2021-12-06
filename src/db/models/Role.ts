import {
  Model,
  Table,
  Column,
  HasMany,
  PrimaryKey,
  AutoIncrement,
  DataType,
  AllowNull,
} from 'sequelize-typescript';

import { UserRole } from '.';

@Table({
  timestamps: true,
  tableName: 'role',
})
export class Role extends Model<Role> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  public id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  alias!: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  createdAt!: Date;

  @AllowNull(true)
  @Column(DataType.DATE)
  updatedAt!: Date | null;

  @HasMany(() => UserRole)
  userRoles!: UserRole[];
}
