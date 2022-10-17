/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';

const serverError: ErrorRequestHandler = (error, req, res, next) => {
  res.status(422).json({ msg: error.msg });
};

export default serverError;
