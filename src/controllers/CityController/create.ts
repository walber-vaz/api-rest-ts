import { Request, Response } from 'express';
import { ICity } from '../../types/ICity';

export const create = (req: Request<{}, {}, ICity>, res: Response) => {
  const data: ICity = req.body;

  console.log(data);

  return res.send('Create Controller');
};
