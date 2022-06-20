import "reflect-metadata";
import express from "express";
import { Routes } from "./routes/Routes";
import bodyParser from "body-parser";
import injectDependency from "./common/dependency-container";

export class Application {
    public express: express.Application;
    public routes: Routes;

    constructor(private alias: string) {
        this.express = express();
    }

    private initializeContainer = (): void => {
        injectDependency();
    };

    private config(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
    }

    private setRoutes(): void {
        this.routes = new Routes(this.alias);
        this.routes.routes(this.express);
    }

    public initialize() {
        this.initializeContainer();
        this.config();
        this.setRoutes();
    }
}