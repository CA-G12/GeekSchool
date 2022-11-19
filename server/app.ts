import express, { Request, Response } from 'express';
import http from 'http';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { join } from 'path';

import { Server } from 'socket.io';
import router from './routes';
import { nodeEnv } from './config/environment';
import { serverError, notFound } from './controllers';
import ioHandler from './IOHandler/IoHandler';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(morgan('dev'));
app.use(cookieParser());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');

app.use('/api/v1', router);
ioHandler(io);

app.set('port', process.env.PORT || 8080);
app.use(serverError);

app.use(notFound);

if (nodeEnv === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

export { app, server };
