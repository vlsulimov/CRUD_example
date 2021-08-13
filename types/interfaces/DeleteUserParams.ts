import { Schema, Number } from 'fastest-validator-decorators';

@Schema()
export class DeleteUserParams {
  @Number({ positive: true, optional: false, convert: true })
  id!: number;
}
