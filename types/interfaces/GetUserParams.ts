import { Schema, Number } from 'fastest-validator-decorators';

@Schema()
export class GetUserParams {
  @Number({ positive: true, optional: false, convert: true })
  id!: number;
}
