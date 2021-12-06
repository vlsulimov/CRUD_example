import { CrudServiceErrors } from '../../types';
import { IServiceErrorObject } from '../../lib';

export const CrudServiceErrorObjects: Record<CrudServiceErrors, IServiceErrorObject> = {
  [CrudServiceErrors.RowNotFound]: { message: 'Row not found.', code: 10 },
  [CrudServiceErrors.tableAlreadyExists]: { message: 'Table already exists', code: 11 },
};
