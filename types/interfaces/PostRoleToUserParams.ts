import { Schema, Number } from 'fastest-validator-decorators';

@Schema()
export class PostRoleToUserParams {
  @Number({ positive: true, optional: false, convert: true })
  userId!: number;

  @Number({ positive: true, optional: false, convert: true })
  roleId!: number;
}
