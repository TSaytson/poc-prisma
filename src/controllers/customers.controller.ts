import { Request, Response } from 'express';
import { customersService } from '../services/customers.service.js';
import { Customer, NCustomer } from '../schemas';

async function signUp(req: Request, res: Response):
    Promise<Response> {
    const { name, email, password } =
        req.body as Customer;


    await customersService.
        signUp({ name, email, password });

    return res.status(201).
        send('User registred');
}

async function signIn(req: Request, res: Response):
    Promise<Response>{
    
    const { email, password } = req.body as NCustomer;

    const token =
        await customersService.
            signIn({email, password})
    
    return res.status(200).
        send({ message: "Login successful", token });

}


export const customersController = {
    signUp,
    signIn
}