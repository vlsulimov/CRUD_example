import { Schema, String } from 'fastest-validator-decorators';

import { Parameters } from '.';

@Schema()
export class IdParam extends Parameters {
    @String({ optional: false })
    id!: string;
}
