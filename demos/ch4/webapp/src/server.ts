import { createServer } from "http";
import { handler } from "./handler";

const port = 5000;
const server = createServer(handler);

server.on("request", (req, res) => {
    if (req.url?.endsWith("favicon.ico")) {
        res.statusCode = 404;
        res.end();
    } else {
        handler(req, res)
    }
});
//server.on("request", handler);

server.listen(port);
server.on("listening", () => {
    console.log(`(Event) Server listening on port ${port}`);
});