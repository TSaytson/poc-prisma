import z from 'zod';

export const signUpSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(4),
    confirmPassword: z.string()
}).refine((data) => 
    data.password === data.confirmPassword,
        { message: "Passwords not match" }
);

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4)
})

export type Customer = Omit<z.infer<typeof signUpSchema>, "confirmPassword">

export type CustomerEntity = Customer & {
    id: number
}

export type NCustomer = z.infer<typeof signInSchema>