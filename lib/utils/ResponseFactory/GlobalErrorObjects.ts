import { IServiceErrorObject, GlobalErrors } from '../..';

export const GlobalErrorObjects: Record<GlobalErrors, IServiceErrorObject> = {
  [GlobalErrors.validationError]: { message: 'Validation error', code: 2 },
};
