import { Role } from '../../db/models';

interface ICreateRolePayload {
  name: string;
  alias: string;
}

export class RoleRepository {
  public static findAll(): Promise<Role[]> {
    return Role.findAll({ order: [['id', 'ASC']] });
  }

  public static findOneById(id: number): Promise<Role> {
    return Role.findOne({ where: { id } });
  }

  public static createOne(payload: ICreateRolePayload): Promise<Role> {
    return Role.create(payload);
  }

  public static destroyById(id: number): Promise<void> {
    return Role.destroy({ where: { id } });
  }
}
