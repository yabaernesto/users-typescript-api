import { User } from "../../model/user";
import { HttpRequest, HttpResponse } from "../procotols";

export interface IDeleteUserController {
  handle(httpRequest: HttpRequest<any>): Promise<HttpResponse<User>>
}

export interface IDeleteUserRepository {
  deleteUser(id: string): Promise<User>
}
