function conflictEmail() {
    return {
        type: "Conflict Error",
        message: "Email already in use",
        status: 409
    }
}

export const customersErrors = {
    conflictEmail
}