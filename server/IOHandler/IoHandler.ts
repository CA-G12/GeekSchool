/* eslint-disable camelcase */
import { Server } from 'socket.io';

interface onlineUserInterface {
  socketId: string,
  userId: number
}

const ioHandler = (io: Server) => {
  try {
    let onlineUsers: any = [];
    // eslint-disable-next-line max-len
    const addNewUser = (userId:number, socketId:string) => !onlineUsers.some((user: onlineUserInterface) => user.userId === userId)
    && onlineUsers.push({
      socketId, userId,
    });

    const removeUser = (
      socketId: string,
    ) => onlineUsers.filter((user: onlineUserInterface) => socketId !== user.socketId);

    io.on('connection', (socket) => {
      socket.on('newUser', (userId:number) => {
        addNewUser(userId, socket.id);
      });

      socket.on('addMessage', (data) => {
        const {
          id, message, sender_id: senderId, createdAt,
          User: {
            img,
            name,
          },
        } = data;
        onlineUsers.map((obj: onlineUserInterface): boolean => {
          if (obj.userId !== senderId) {
            socket.to(obj.socketId).emit('sendMessage', {
              id,
              sender_id: senderId,
              message,
              createdAt,
              User: {
                img,
                name,
              },
            });
            return true;
          }
          return false;
        });
      });

      socket.on('disconnect', () => {
        onlineUsers = removeUser(socket.id);
      });
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default ioHandler;
