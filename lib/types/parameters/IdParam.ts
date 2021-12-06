import { Schema, Number } from 'fastest-validator-decorators';

import { Parameters } from '.';

@Schema()
export class IdParam extends Parameters {
    @Number({ optional: false })
    id!: number;
}
