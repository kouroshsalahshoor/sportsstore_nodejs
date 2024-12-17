import { Express } from "express";

export const createCatalogRoutes = (app: Express) => {
    app.get("/", (req, resp) => {
        resp.render("index");
        //resp.send("Hello, SportsStore Route");
    })
}