import { Customer } from "../protocols/customer";
import { customersRepository } from "../repositories/customers.repository.js";
import { errors } from '../errors/errorsFunctions.js'
import bcrypt from 'bcrypt';

async function signUp(
    { name, email, password }: Customer) {
    
    const { rowCount: userFound } =
        await customersRepository.findByEmail(email);

    if (userFound)
        throw errors.conflictEmail();
    
    const hashedPassword = await bcrypt.hash(
        password, 10
    );

    await customersRepository.insertCustomer({
        name, email, password: hashedPassword
    });
}

export const customersService = {
    signUp
}