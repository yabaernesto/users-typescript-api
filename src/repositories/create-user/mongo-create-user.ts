import { CreateUserParams, ICreateUserRepository } from "../../controllers/create-user/protocol";
import { MongoClient } from "../../database/mongo";
import { User } from "../../model/user";

export class MongoCreateUserRepository implements ICreateUserRepository {
  async createUser(params: CreateUserParams): Promise<User> {
    const { insertedId } = await MongoClient.db
      .collection("users")
      .insertOne(params)

    const user = await MongoClient.db
      .collection<Omit<User, "id">>("user")
      .findOne({ _id: insertedId })

    if (!user) {
      throw new Error("User not created!")
    }

    const { _id, ...rest } = user

    return { id: _id.toHexString(), ...rest }
  }
}
