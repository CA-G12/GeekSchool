import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { message } from "antd";
import { messageInterface, textMessageInterface } from "../../../interfaces";
import { useUserData } from "../../../context/AuthContext";
import { card2 } from "../../../assets";
import "./style.css";

const ChatMessage = ({ messageText, senderId }: textMessageInterface) => {
  const { userData } = useUserData();

  return (
    <div
      className={
        userData.id === senderId
          ? "message-info message-active"
          : "message-info"
      }
    >
      <div>
        <Link to="/class/1/chats">
          {" "}
          <img src={card2} alt="person" />
        </Link>
      </div>
      <p id={`${senderId}`}>{messageText}</p>
    </div>
  );
};

const ChatBox = () => {
  const [messages, setMessage] = useState<[messageInterface] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [textInput, setTextInput] = useState<string>("");

  const { classId } = useParams();

  const getMessage = async () => {
    try {
      const { data } = await axios.get(`/api/v1/chat/${classId}/messages`);
      setMessage(data);
      setLoading(false);
    } catch (error: any) {
      message.error(error.response.data.msg);
    }
  };

  useEffect(() => {
    getMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const handleAddMessage = async () => {
    try {
      await axios.post(`/api/v1/chat/${classId}/addMessage`, {
        message: textInput,
      });
    } catch (error: any) {
      message.error(error.response.data.msg);
    }
  };

  return (
    <section id="chat-box">
      <h1>محادثة الصف</h1>
      <div className="chat-container">
        <div className="chat-message">
          {messages ? (
            messages?.map((e) => (
              <ChatMessage messageText={e.message} senderId={e.sender_id} />
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
