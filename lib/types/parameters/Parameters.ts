import { getSchema } from 'fastest-validator-decorators';

export abstract class Parameters {
    static get schema() {
        return getSchema(this);
    }
}
