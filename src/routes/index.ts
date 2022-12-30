import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CityController } from '../controllers';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  console.log(req.body);
  return res.status(StatusCodes.ACCEPTED).json({ message: 'Olá, dev 📢' });
});

router.post('/city', CityController.create);

export { router };
