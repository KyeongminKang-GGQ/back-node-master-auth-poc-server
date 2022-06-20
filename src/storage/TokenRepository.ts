export interface TokenRepository {
    update(token: Token): Promise<void>;
    save(token: Token): Promise<void>;
}

export class Token {
    constructor(
        public tid: string,
        public refreshToken: string,
        public refreshToken_expireTime: Date,
        public provider: string,
    ) { }
}