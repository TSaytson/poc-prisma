import { db } from "../config/database.js";
import { Customer } from "../protocols/customer.js";
import { QueryResult } from 'pg';

function insertCustomer(
    { name, email, password }: Customer) {
    return db.query(`INSERT INTO customers 
    (name, email, password)
    VALUES ($1,$2,$3);`,
        [name, email, password]);
}

async function findByEmail(email: string)   {
    return db.query(`SELECT * FROM customers
    WHERE email=$1;`, [email]);

}
export const customersRepository = {
    insertCustomer,
    findByEmail
}