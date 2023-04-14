import { Router } from 'express';
import { loginRoutes } from './login.routes.js';
import { rentalRoutes } from './rentals.routes.js';

export const routes = Router();

routes.use([loginRoutes, rentalRoutes]);