import validator from "validator"
import { User } from "../../model/user";
import { HttpResponse, HttpRequest } from "../procotols";
import { CreateUserParams, ICreateUserController, ICreateUserRepository } from "./protocol";

export class CreateUserController implements ICreateUserController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(httpRequest: HttpRequest<CreateUserParams>): Promise<HttpResponse<User>> {
    try {
      const requiredFields = ["firstName", "lastName", "email", "password"];

      // Verifica se o corpo da requisição está presente
      if (!httpRequest.body) {
        return {
          statusCode: 400,
          body: "Request body is required!",
        };
      }

      for (const field of requiredFields) {
        const fieldValue = httpRequest.body[field as keyof CreateUserParams];

        // Verifica se o campo é nulo, vazio ou não existe
        if (!fieldValue || (typeof fieldValue === 'string' && fieldValue.length === 0) || (Array.isArray(fieldValue) && fieldValue.length === 0)) {
          return {
            statusCode: 400,
            body: `Field ${field} is required!`,
          };
        }
      }

      // verificacao se o email eh valido
      const emailIsValid = validator.isEmail(httpRequest.body?.email)

      if (!emailIsValid) {
        return {
          statusCode: 400,
          body: "E-mail is invalid",
        }
      }

      const user = await this.createUserRepository.createUser(httpRequest.body!);

      return {
        statusCode: 201,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
