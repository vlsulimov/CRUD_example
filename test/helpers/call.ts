import { actionCall } from '../../lib';

import { webServer } from '../../src/services/web-server';

export const call = actionCall(webServer);
