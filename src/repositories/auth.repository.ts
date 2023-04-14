import { sessions } from "@prisma/client";
import { prisma } from "../config/database.js";

function findByUserId(customer_id: number): Promise<sessions | null>{
    return prisma.sessions.findFirst({
        where: {customer_id }
    })
}

function createSession(customer_id: number,
    token:string) {
    return prisma.sessions.create({
        data: { customer_id, token }
    })
}

export const authRepository = {
    findByUserId,
    createSession
}
