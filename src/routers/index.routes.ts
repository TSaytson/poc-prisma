import { Router } from 'express';
import { customerRoutes } from './customers.routes.js';
import { rentalRoutes } from './rentals.routes.js';

export const routes = Router();

routes.use([customerRoutes, rentalRoutes]);