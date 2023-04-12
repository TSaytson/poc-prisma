export type Customer = {
    name: string,
    email: string,
    password: string
}

export type CustomerEntity = Customer & {
    id: number
}
