import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(StatusCodes.ACCEPTED).json({ message: 'Olá, dev 📢' });
});

export { router };
