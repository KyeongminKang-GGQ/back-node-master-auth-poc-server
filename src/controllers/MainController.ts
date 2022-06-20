import { Router, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { SignUpManager } from "../workers/SignUpManager";

@injectable()
export class MainController {

    constructor(
        @inject("SignUpManager") private signUpManager: SignUpManager
    ) { }

    signup = async (request: Request, response: Response) => {
        console.log(`signup() in MainController, ${JSON.stringify(request.body)}`);

        try {
            const uid = await this.signUpManager.signup(
                request.body.name,
                request.body.email,
                request.body.password,
                request.body.summoner_name,
            )
            response.status(200).send();
        } catch (err) {
            response.status(400).json(err);
        }
    }

    signin = (request: Request, response: Response) => {
        console.log("signin() in MainController");
    }

    signout = (request: Request, response: Response) => {
        console.log("signout() in MainController");
    }

    token = (request: Request, response: Response) => {
        console.log("token() in MainController");
    }

    oauthSignUp = (request: Request, response: Response) => {
        console.log("oauthSignUp() in MainController");
    }

    oauthToken = (request: Request, response: Response) => {
        console.log("oauthToken() in MainController");
    }
}