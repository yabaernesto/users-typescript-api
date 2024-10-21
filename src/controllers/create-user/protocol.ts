import { User } from "../../model/user";

export interface CreateUserParams {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>
}
