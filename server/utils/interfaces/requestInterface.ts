import { Request } from 'express';
// import UserInterface from './userInterFace';

interface CustomRequest extends Request {
  user: {
    id:number,
    name: string,
    role: string,
};
}

export default CustomRequest;
