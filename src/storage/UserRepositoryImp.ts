import { UserRepository, User } from "./UserRepository";
import * as mongoDB from "mongodb";

export class UserRepositoryImp implements UserRepository {
    private client: mongoDB.MongoClient;

    private async connect() {
        if (this.client == null) {
            this.client = await new mongoDB
                .MongoClient(process.env.AUTH_SERVER_REPOSITORY_CONNECTION_STRING)
                .connect();
        }
    }

    getUserById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getUserByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    async save(user: User): Promise<void> {
        await this.connect();

        this.client
            .db("auth")
            .collection("user")
            .insertOne(user);
    }
}