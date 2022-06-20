export interface ExtnernalTokenRepository {
    update(token: ExternalToken): Promise<void>;
    save(token: ExternalToken): Promise<void>;
}

export class ExternalToken {
    constructor(
        public tid: string,
        public refreshToken: string,
        public refreshToken_expireTime: Date,
        public provider: string,
    ) { }
}