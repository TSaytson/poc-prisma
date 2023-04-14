import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

export function schemaValidation(schema: ZodSchema) {
    return (req: Request,
        res: Response,
        next: NextFunction) => {

        const validation = schema.
            safeParse(req.body);
        if (!validation.success) {
            const errors = validation.error.errors.
                map((error) =>
                    `${error.path} ${error.message}`);
            console.log(errors);
            return res.status(422).send(errors);
        }

        next();
    }
}