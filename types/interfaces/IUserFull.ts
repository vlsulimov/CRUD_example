export interface IUserFull {
  id: number;
  firstName: string;
  lastName: string;
  phone: string | null;
  roles: {
    id: number;
    name: string;
    alias: string;
  }[];
}
