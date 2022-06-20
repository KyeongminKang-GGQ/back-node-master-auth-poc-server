import "reflect-metadata";
import express from "express";
import { Routes } from "./routes/Routes";

export class Application {
    public express: express.Application;
    public routes: Routes;

    constructor(private alias: string) {
        this.express = express();
    }

    private setRoutes(): void {
        this.routes = new Routes(this.alias);
        this.routes.routes(this.express);
    }

    public initialize() {
        this.setRoutes();
    }
}