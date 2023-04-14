function conflictEmail() {
    return {
        type: "Conflict Error",
        message: "Email already in use",
        status: 409
    }
}

function unprocessableEntity() {
    return {
        type: "Unprocessable entity",
        message: "Could not log in",
        status: 422
    }
}
export const customersErrors = {
    conflictEmail,
    unprocessableEntity
}