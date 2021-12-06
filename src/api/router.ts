import { getRouter } from '../../lib';

import * as actions from './actions';

const BASE_URL = '/crud';

export default getRouter(actions, BASE_URL);
