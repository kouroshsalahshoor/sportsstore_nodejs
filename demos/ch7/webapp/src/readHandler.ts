import { Request, Response } from "express";
<<<<<<< HEAD
export const readHandler = (req: Request, resp: Response) => {
    //resp.json({
    //    message: "Hello, World"
    //});

=======

export const readHandler = (req: Request, resp: Response) => {
    // resp.json({
    //     message: "Hello, World"
    // });
>>>>>>> ch7
    resp.cookie("sessionID", "mysecretcode");
    req.pipe(resp);
}