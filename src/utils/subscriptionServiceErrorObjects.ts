import { SubscriptionServiceErrors } from '../../types';
import { IServiceErrorObject } from '../../typesGlobal';

export const subscriptionServiceErrorObjects: Record<
  SubscriptionServiceErrors,
  IServiceErrorObject
> = {
  [SubscriptionServiceErrors.validationError]: { message: 'Validation error', code: 2 },
  [SubscriptionServiceErrors.RowNotFound]: { message: 'Row not found.', code: 3 },
  [SubscriptionServiceErrors.tableAlreadyExists]:  { message: 'Table already exists', code: 4 },
};
