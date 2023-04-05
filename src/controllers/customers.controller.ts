import { NextFunction, Request, Response } from 'express';
import { customersService } from '../services/customers.service.js';
import { Customer } from '../protocols/customer.js';


async function signUp(
    req: Request,
    res: Response,
    next: NextFunction) {
    const { name, email, password } =
        req.body as Customer;


    await customersService.
        signUp({ name, email, password });

    return res.status(201).
        send('User registred');
}

export const customersController = {
    signUp
}