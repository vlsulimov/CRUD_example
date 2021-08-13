import { Schema, String } from 'fastest-validator-decorators';

@Schema()
export class PostUserParams {
  @String({ optional: false })
  firstName!: string;

  @String({ optional: false })
  lastName!: string;

  @String({ optional: false, nullable: true })
  phone!: string | null;
}
