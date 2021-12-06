import { User } from '../../db/models/User';
import { Role, UserRole } from '../../db/models';

interface ICreateUserPayload {
  firstName: string;
  lastName: string;
  phone: string | null;
}

export class UserRepository {
  public static findAll(): Promise<User[]> {
    return User.findAll({ order: [['id', 'ASC']] });
  }

  public static findOneById(id: number[] | number): Promise<User> {
    return User.findOne({ where: { id } });
  }

  public static async findOneWithRolesById(id: number): Promise<User> {
    return User.findOne({
      where: { id },
      include: [{ model: UserRole, include: [Role] }],
    });
  }

  public static createOne(payload: ICreateUserPayload): Promise<User> {
    return User.create(payload);
  }

  public static destroyById(id: number): Promise<void> {
    return User.destroy({ where: { id } });
  }
}
