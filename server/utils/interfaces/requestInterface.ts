import { Request } from 'express';
// import UserInterface from './userInterFace';

interface CustomRequest extends Request {
  user: object | unknown;
}

export default CustomRequest;
