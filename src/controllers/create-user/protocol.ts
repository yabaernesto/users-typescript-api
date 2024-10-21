import { User } from "../../model/user";
import { HttpResponse, HttpRquest } from "../procotols";

export interface ICreateUserController {
  handle(httpRequest: HttpRquest<CreateUserParams>): Promise<HttpResponse<User>>
}

export interface CreateUserParams {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>
}
