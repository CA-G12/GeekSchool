/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';

const serverError: ErrorRequestHandler = (error, req, res, next) => (
  res.status(error.status).json({ message: error.message })
);

export default serverError;
