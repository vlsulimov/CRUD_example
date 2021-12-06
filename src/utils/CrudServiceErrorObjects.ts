import { CrudServiceErrors } from '../../types';
import { IServiceErrorObject } from '../../lib';

export const CrudServiceErrorObjects: Record<
  CrudServiceErrors,
  IServiceErrorObject
> = {
  [CrudServiceErrors.validationError]: { message: 'Validation error', code: 2 },
  [CrudServiceErrors.RowNotFound]: { message: 'Row not found.', code: 3 },
  [CrudServiceErrors.tableAlreadyExists]:  { message: 'Table already exists', code: 4 },
};
