import { User } from "../../model/user"
import { HttpResponse } from "../procotols"

export interface IGetUsersController {
  handle(): Promise<HttpResponse<User[]>>
}

export interface IGetUsersRepository {
  getUsers(): Promise<User[]>
}
