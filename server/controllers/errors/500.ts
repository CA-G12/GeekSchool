/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';

const serverError: ErrorRequestHandler = (error, req, res, next) => {
  res.status(error.status).json({ msg: error.msg });
};

export default serverError;
