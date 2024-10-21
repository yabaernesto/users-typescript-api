import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../model/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: 'Yaba',
        lastName: 'Ernesto',
        email: 'yabaernesto@gmail.com',
        password: '123456',
      }
    ]
  }
}
