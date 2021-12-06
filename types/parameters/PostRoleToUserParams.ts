import { Schema, Number } from 'fastest-validator-decorators';

import { Parameters } from '../../lib';

@Schema()
export class PostRoleToUserParams extends Parameters {
  @Number({ positive: true, optional: false, convert: true })
  userId!: number;

  @Number({ positive: true, optional: false, convert: true })
  roleId!: number;
}
