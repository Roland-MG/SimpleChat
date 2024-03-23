import { useSelector } from "react-redux";
import Message from "../Message/Message";

const ChatMessges = () => {
    const messages = useSelector(state => state.messages);
    return (
        <div style={{ diplay: "flex", height: "500px", overflow: "auto" }}>
            {messages.data.map((msg, index) => (
                <Message key={index} msg={msg} />
            ))}
        </div>
    );
};

export default ChatMessges;
