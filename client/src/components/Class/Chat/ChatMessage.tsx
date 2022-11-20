import { Link } from "react-router-dom";
import { formatDistance, parseISO } from "date-fns";
import { textMessageInterface } from "../../../interfaces";

// eslint-disable-next-line no-unused-vars
const ChatMessage = ({
  messageText,
  senderId,
  img,
  date,
  name,
  userId,
}: textMessageInterface) => (
  <div
    className={
      userId === senderId ? "message-info message-active" : "message-info"
    }
  >
    <div title={name}>
      <Link to={`/student/${senderId}/classes`}>
        <img src={img} alt="person" />
      </Link>
    </div>
    <div>
      <p>{messageText}</p>
      <span>
        {formatDistance(parseISO(date), new Date(), { addSuffix: true })}
      </span>
    </div>
  </div>
)

export default ChatMessage;
