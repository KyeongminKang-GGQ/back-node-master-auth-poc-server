import "reflect-metadata";
import express from "express";
import { Routes } from "./routes/Routes";
import bodyParser from "body-parser";

export class Application {
    public express: express.Application;
    public routes: Routes;

    constructor(private alias: string) {
        this.express = express();
    }

    private config(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
    }

    private setRoutes(): void {
        this.routes = new Routes(this.alias);
        this.routes.routes(this.express);
    }

    public initialize() {
        this.config();
        this.setRoutes();
    }
}