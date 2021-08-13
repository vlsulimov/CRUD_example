import { Role } from '../../db/models';

interface ICreateRolePayload {
  name: string;
  alias: string;
}

export class RoleRepository {
  public static findAll(): Promise<Role[]> {
    return Role.findAll({ order: [['id', 'ASC']] });
  }

  public static findAllById(id: number[] | number): Promise<Role[]> {
    return Role.findAll({ where: { id }, order: [['id', 'ASC']] });
  }

  public static createOne(payload: ICreateRolePayload): Promise<Role> {
    return Role.create(payload);
  }

  public static destroyById(id: number): Promise<void> {
    return Role.destroy({ where: { id } });
  }
}
