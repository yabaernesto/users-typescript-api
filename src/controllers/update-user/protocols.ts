import { User } from "../../model/user";
import { HttpRequest, HttpResponse } from "../procotols";

export interface UpdateUserParams {
  firstName?: string
  lastName?: string
  password?: string
}

export interface IUpdateUserController {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>>
}

export interface IUpdateUserRepository {
  updateUser(id: string, params: UpdateUserParams): Promise<User>
}
