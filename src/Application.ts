import express from "express";

export class Application {
    public express: express.Application;

    constructor(private alias: string) {
        this.express = express();
    }
}