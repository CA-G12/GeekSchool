/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
/* eslint-disable-next-line react-hooks/exhaustive-deps */
import axios from "axios";
import { useState, useEffect, useRef } from "react";
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
  const [text, setText] = useState<string>("");
  const { userData } = useUserData();
  const { classId } = useParams();
  const bottomRef = useRef<HTMLInputElement | null>(null);

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
        message: text,
      });

      const newMessage = {
        id: data.id,
        message: text,
        sender_id: data.sender_id,
        createdAt: data.createdAt,
        User: {
          img: userData.img,
          name: userData.name,
        },
      };

      setMessage((prev: any): any => [...prev, newMessage]);
      socket.emit("addMessage", newMessage);
      setText("");
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

  useEffect(() => {
    bottomRef.current?.addEventListener("DOMNodeInserted", (event: any) => {
      const { currentTarget: target } = event;
      target.scroll({ top: target.scrollHeight, behavior: "smooth" });
    });
  }, [messages]);

  return (
    <section id="chat-box">
      <h1>محادثة الصف</h1>
      <div className="chat-container">
        <div className="chat-message" ref={bottomRef}>
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
        <form
          className="form-message"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddMessage();
          }}
        >
          <input
            type="text"
            placeholder="أكتب رسالتك"
            name="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button type="submit">إرسال</button>
        </form>
      </div>
    </section>
  );
};

export default ChatBox;
