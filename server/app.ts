import express, { Request, Response, NextFunction } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { join } from 'path';
import router from './routes';
import { nodeEnv } from './config/environment';

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');

app.use('/api/v1/', router);

if (nodeEnv === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}
/* eslint-disable no-unused-vars */
app.use((error:any, req:Request, res:Response, next:NextFunction):void => {
  res.status(error.status).json({ msg: error.message });
});

export default app;
