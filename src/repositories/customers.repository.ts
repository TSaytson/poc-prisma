import { customers } from "@prisma/client";
import { prisma } from "../config/database.js";
import { Customer, CustomerEntity } from "../schemas";

function insertCustomer(
    { name, email, password }: Customer) {
    
    return prisma.customers.create({
        data: { name, email, password }
    });
}

async function findByEmail(email: string):
    Promise<customers | null>  {
    return prisma.customers.findUnique({
        where: { email }
    })
}

async function findById(id: number):
    Promise<customers | null>{
    return prisma.customers.findUnique({
        where: {id}
    })
    }
async function upsertCustomer(customer: CustomerEntity) {
    return prisma.customers.upsert({
        where: { id: customer.id || 0},
        create: customer,
        update: customer
    })
}

export const customersRepository = {
    insertCustomer,
    findByEmail,
    findById
}