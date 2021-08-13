import { UserRole } from '../../db/models';

interface ICreateUserRolePayload {
  userId: number;
  roleId: number;
}

export class UserRoleRepository {
  public static createOne(payload: ICreateUserRolePayload): Promise<UserRole> {
    return UserRole.create(payload);
  }
}
