import { useSelector } from "react-redux";
import Toast from "react-bootstrap/Toast";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const Message = ({ msg }) => {
    const dispatch = useDispatch();
    const txtMessage = useSelector(state => state.txtMessage);
    const msgStyles = {
        me: {
            backgroundColor: "#333",
            textAlign: "right",
            color: "white",
        },
        you: {
            backgroundColor: "#229",
            textAlign: "left",
            color: "white",
        },
    };
    const msgStyle = {
        me: {
            diplay: "flex",
            flexDirection: "column-reverse",
            // backgroundColor: "#333",
            // textAlign: "right",
        },
        you: {
            diplay: "flex",
            // backgroundColor: "#564",
            // textAlign: "left",
            flexDirection: "column-reverse",
        },
    };
    return (
        <div
            style={{
                diplay: "flex",
                flexDirection: "row",
                // width: "400px",
            }}
            className="mb-3">
            <Toast className={msg.user === "me" ? "ms-auto" : ""}>
                <Toast.Header
                    closeButton={false}
                    style={msgStyles[msg.user]}
                    delay={3000}>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">
                        {msg.user.toUpperCase()}
                    </strong>
                    <small className="me-2">11 mins ago </small>

                    <Button
                        variant="outline-info"
                        size="sm"
                        className="p-1 me-2"
                        onClick={() => {
                            dispatch({
                                type: "toggle-txt",
                                payload: msg.txt,
                            });
                            dispatch({
                                type: "toggle-txt-id",
                                payload: msg.id || "",
                            });
                        }}>
                        ✏️
                    </Button>

                    <Button
                        variant="outline-danger"
                        size="sm"
                        className="p-1 me-2"
                        onClick={() => {
                            dispatch({
                                type: "del-msg",
                                payload: msg.id,
                            });
                        }}>
                        🗑️
                    </Button>
                </Toast.Header>
                <Toast.Body style={msgStyles[msg.user]}>{msg.txt}</Toast.Body>
            </Toast>
        </div>
    );
};

export default Message;
