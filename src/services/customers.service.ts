import { Customer } from "../protocols";
import { customersRepository } from "../repositories/customers.repository.js";
import { customersErrors } from '../errors/customers.errors.js'
import bcrypt from 'bcrypt';

async function signUp(
    { name, email, password }: Customer):
    Promise<void> {
    
    const userFound =
        await customersRepository.
            findByEmail(email);

    if (userFound)
        throw customersErrors.conflictEmail();
    
    const hashedPassword =
        await bcrypt.hash(
        password, 10
    );

    await customersRepository.
        insertCustomer({
        name, email, password: hashedPassword
    });
}

async function signIn(
    { email, password }: Customer):
    Promise<string>{
    
    
    return;
}

export const customersService = {
    signUp,
    signIn
}