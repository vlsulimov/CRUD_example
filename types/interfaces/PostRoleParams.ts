import { Schema, String } from 'fastest-validator-decorators';

@Schema()
export class PostRoleParams {
  @String({ optional: false })
  name!: string;

  @String({ optional: false })
  alias!: string;
}
