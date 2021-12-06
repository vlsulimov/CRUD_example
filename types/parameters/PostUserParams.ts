import { Schema, String } from 'fastest-validator-decorators';

import { Parameters } from '../../lib';

@Schema()
export class PostUserParams extends Parameters {
  @String({ optional: false })
  firstName!: string;

  @String({ optional: false })
  lastName!: string;

  @String({ optional: false, nullable: true })
  phone!: string | null;
}
