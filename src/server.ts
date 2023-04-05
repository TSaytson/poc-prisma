import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import {routes} from './routers/index.routes.js'
import { errorHandler } from './middlewares/errorHandler.middleware.js';

const server = express();

server.use(express.json())
    .use(cors())
    .use(routes)
    .use(errorHandler);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running on port ${port}`))