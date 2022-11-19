import { app, server } from './app';

const port = app.get('port');

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server is running on port: ${port}, and ready to accept requests`,
  );
});
