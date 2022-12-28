import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
  return res.send('Olá, dev 📢');
});

export { server };
