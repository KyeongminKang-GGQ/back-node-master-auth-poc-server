import { inject, injectable } from "tsyringe";

import { User, UserRepository } from "../storage/UserRepository";
import { UidGenerator } from "../workers/UidGenerator";

@injectable()
export class SignUpManager {

    constructor(
        @inject("UidGenerator") private uidGenerator: UidGenerator,
        @inject("UserRepository") private userRepository: UserRepository
    ) { }

    public async signup(
        name: string,
        email: string,
        password: string,
        summonerName: string,
    ) {
        try {
            const uid = this.uidGenerator.generate(
                name,
                email,
                undefined,
                undefined
            )

            console.log(`signup(), generate uid ${uid}`);

            await this.userRepository.save(
                new User(
                    uid,
                    email,
                    password,
                    summonerName,
                    undefined,
                    undefined
                )
            );
        } catch (err) {
            throw { errorCode: 'AUTH001', errorMessage: 'Invalid Input Data' };
        }
    }
}