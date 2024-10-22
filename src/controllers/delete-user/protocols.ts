import { User } from "../../model/user";

export interface IDeleteUserRepository {
  deleteUser(id: string): Promise<User>
}
