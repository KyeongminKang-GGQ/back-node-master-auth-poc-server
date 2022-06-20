import { Router, Request, Response } from "express";

export class MainController {
    signup = (request: Request, response: Response) => {
        console.log("signup() in MainController");
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