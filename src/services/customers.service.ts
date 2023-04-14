import { NCustomer, Customer } from "../schemas";
import { customersRepository } from "../repositories/customers.repository.js";
import { authRepository } from "../repositories/auth.repository.js";
import { customersErrors } from '../errors/customers.errors.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    { email, password }: NCustomer):
    Promise<string>{
    
    const customer =
        await customersRepository.
            findByEmail(email);
    
    if (!customer)
        throw customersErrors.unprocessableEntity();
    
    const checkPassword = bcrypt.
        compareSync(password, customer.password);
    
    if (!checkPassword)
        throw customersErrors.unprocessableEntity();
    
    const session = await authRepository.
        findByUserId(customer.id);
    if (session) {
        jwt.verify(
            session.token,
            process.env.SECRET_JWT || 'secret',
            (error, decoded) => {
                if (error)
                    console.log(error)
            });
        return session.token;
    }

    const token = jwt.sign({
        id: customer.id,
        email: customer.email
    }, process.env.SECRET_JWT || 'secret');

    await authRepository.
        createSession( customer.id, token);
    
    return token;
  
}

export const customersService = {
    signUp,
    signIn
}