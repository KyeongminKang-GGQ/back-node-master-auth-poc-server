import express from "express";
import { container } from "tsyringe";
import { MainController } from "../controllers/MainController";

export class Routes {
    private mainController = container.resolve<MainController>(MainController);

    constructor(
        private alias: string,
    ) { }

    public routes = (app: express.Application): void => {
        app
            .route(`/${this.alias}/v1/signup`)
            .post(this.mainController.signup);

        app
            .route(`/${this.alias}/v1/signin`)
            .post(this.mainController.signin);

        app
            .route(`/${this.alias}/v1/signout`)
            .post(this.mainController.signout);

        app
            .route(`/${this.alias}/v1/token`)
            .post(this.mainController.token);

        app
            .route(`/${this.alias}/v1/oauth/signup`)
            .post(this.mainController.oauthSignUp);

        app
            .route(`/${this.alias}/v1/oauth/token`)
            .post(this.mainController.oauthToken);
    }
}