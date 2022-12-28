import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import { router } from '../routes/';

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan('combined'));

server.use(router);

export { server };
