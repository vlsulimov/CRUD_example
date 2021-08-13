import {
  Model,
  Table,
  Column,
  BelongsToMany,
  PrimaryKey,
  AutoIncrement,
  DataType,
  AllowNull,
} from 'sequelize-typescript';

import { UserRole, Role } from '.';

@Table({
  timestamps: true,
  tableName: 'user',
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  public id!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  firstName!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  lastName!: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  phone!: string | null;

  @AllowNull(true)
  @Column(DataType.DATE)
  createdAt!: Date;

  @AllowNull(false)
  @Column(DataType.DATE)
  updatedAt!: Date | null;

  // @HasMany(() => UserRole)
  // userRoles!: UserRole[];
  @BelongsToMany(() => Role, () => UserRole)
  roles!: Role[];
}
