/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
/* eslint-disable-next-line react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { message } from "antd";
import { io } from "socket.io-client";
import ChatMessage from "./ChatMessage";
import { messageInterface } from "../../../interfaces";
import { useUserData } from "../../../context/AuthContext";
import "./style.css";

const socket = io(`${process.env.REACT_APP_BASE_URL}`);
const ChatBox = () => {
  const [messages, setMessage] = useState<[messageInterface] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [textInput, setTextInput] = useState<string>("");
  const { userData } = useUserData();
  const { classId } = useParams();

  useEffect(() => {
    socket.on("connect", () => {});
    socket?.emit("newUser", userData.id);
  }, [socket]);

  useEffect(() => {
    const getMessage = async () => {
      try {
        const { data } = await axios.get(`/api/v1/chat/${classId}/messages`);
        setMessage(data);
        setLoading(false);
      } catch (error: any) {
        message.error(error.response.data.msg);
      }
    };

    getMessage();
  }, [loading]);

  const handleAddMessage = async () => {
    try {
      const { data } = await axios.post(`/api/v1/chat/${classId}/addMessage`, {
        message: textInput,
      });

      const newMessage = {
        id: data.id,
        message: data.message,
        sender_id: data.sender_id,
        createdAt: data.createdAt,
        User: {
          img: userData.img,
          name: userData.name,
        },
      };

      setMessage((prev: any): any => [...prev, newMessage]);
      socket.emit("addMessage", newMessage);
    } catch (error: any) {
      message.error(error.response.data.msg);
    }
  };

  useEffect(() => {
    socket.on("sendMessage", (newMessageReceived) => {
      const {
        id,
        // eslint-disable-next-line @typescript-eslint/no-shadow
        message,
        sender_id,
        createdAt,
        User: { img, name },
      } = newMessageReceived;
      setMessage((prev: any): any => [
        ...prev,
        {
          id,
          message,
          sender_id,
          createdAt,
          User: {
            img,
            name,
          },
        },
      ]);
    });
  }, [socket]);

  return (
    <section id="chat-box">
      <h1>محادثة الصف</h1>
      <div className="chat-container">
        <div className="chat-message">
          {messages ? (
            messages?.map((e) => (
              <ChatMessage
                messageText={e.message}
                senderId={e.sender_id}
                userId={userData?.id}
                img={e.User.img}
                name={e.User.name}
                date={e.createdAt}
                key={`${Math.random()}chat`}
              />
            ))
          ) : (
            <p>لا يوجد رسائل</p>
          )}
        </div>
        <div className="form-message">
          <input
            type="text"
            placeholder="أكتب رسالتك"
            onChange={(e) => setTextInput(e.target.value)}
          />
          <button type="button" onClick={handleAddMessage}>
            إرسال
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChatBox;
