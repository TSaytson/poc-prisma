import { Router } from 'express';
import { signInSchema, signUpSchema } from '../schemas/customer.schemas.js';
import { schemaValidation } from '../middlewares/schema.middleware.js'
import { customersController } from '../controllers/customers.controller.js';

export const loginRoutes = Router();

loginRoutes.post('/signUp',
    schemaValidation(signUpSchema),
    customersController.signUp);
loginRoutes.post('/signIn',
    schemaValidation(signInSchema),
    customersController.signIn);