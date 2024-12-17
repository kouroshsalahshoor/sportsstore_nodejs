import { Express } from "express";

export const createCatalogRoutes = (app: Express) => {
    app.get("/", (req, resp) => {
        resp.render("index");
        //resp.send("Hello, SportsStore Route");
    });

    app.get("/err", (req, resp) => {
        throw new Error("Something bad happened");
    });

    app.get("/asyncerr", async (req, resp) => {
        throw new Error("Something bad happened asynchronously");
    });
}