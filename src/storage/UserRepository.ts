export interface UserRepository {
    getUserById(id: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;
}

export class User {
    constructor(
        public uid: string,
        public email: string,
        public password: string,
        public summonerName: string,
        public tid: string,
        public provider: string,
    ) { }
}