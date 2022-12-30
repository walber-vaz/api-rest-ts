import { Request, Response } from 'express';
import { ICity } from '../../types/ICity';
import * as yup from 'yup';

const bodyValidation: yup.SchemaOf<ICity> = yup.object().shape({
  name: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, ICity>, res: Response) => {
  let validateData: ICity | undefined = undefined;
  try {
    validateData = await bodyValidation.validate(req.body);
  } catch (error) {
    const yupError = error as yup.ValidationError;
    return res.json({
      errors: {
        default: yupError.message,
      },
    });
  }

  return res.send(validateData);
};
