import { Router } from 'express';
import { signUpSchema } from '../schemas/customer.schemas.js';
import { schemaValidation } from '../middlewares/schema.middleware.js'
import { customersController } from '../controllers/customers.controller.js';

export const customerRoutes = Router();

customerRoutes.post('/signUp',
    schemaValidation(signUpSchema),
    customersController.signUp);