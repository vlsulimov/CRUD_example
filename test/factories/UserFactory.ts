import { ObjectFactory } from '../../lib';

import { User } from '../../src/db/models';
import { userSample } from '../data-samples';

class UserFactory extends ObjectFactory<User> {
    constructor() {
        super(User, userSample);
    }
}

export const userFactory = new UserFactory();
