import { Schema, String } from 'fastest-validator-decorators';

import { Parameters } from '../../lib';

@Schema()
export class PostRoleParams extends Parameters {
  @String({ optional: false })
  name!: string;

  @String({ optional: false })
  alias!: string;
}
