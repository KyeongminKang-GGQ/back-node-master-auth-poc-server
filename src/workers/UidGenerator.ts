import { injectable } from "tsyringe";

@injectable()
export class UidGenerator {

    private encoding(origin: string): string {
        return Buffer.from(origin, "utf8").toString('base64');
    }

    private decoding(target: string): string {
        return Buffer.from(target, "base64").toString('utf8');
    }

    public generate(
        name: string,
        email: string,
        tid: string,
        provider: string
    ): string {
        if (email != undefined && name != undefined) {
            return this.encoding(''.concat(email).concat(name));
        } else if (tid != undefined && provider != undefined) {
            return this.encoding(''.concat(tid).concat(provider));
        } else {
            throw new Error("Invalid Request");
        }
    }
}