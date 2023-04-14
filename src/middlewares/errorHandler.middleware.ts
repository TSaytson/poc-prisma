import {Request, Response, NextFunction } from "express";
import { IError } from '../protocols';

export function errorHandler(
    error: IError,
    req: Request,
    res: Response,
    next: NextFunction) {
    console.log(error);
    return res.status(error.status).
        send(error.message);
}