import { Request } from 'express';

interface CustomRequest extends Request {
  user: object | unknown;
}

export default CustomRequest;
