import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ChatForm = () => {
    const dispatch = useDispatch();
    const txtMessage = useSelector(state => state.txtMessage);
    const user = useSelector(state => state.messages.user);
    const data = useSelector(state => state.messages.data);
    const handleSend = e => {
        e.preventDefault();
        const curMsg = data.findIndex(
            x => x.id == e.target.getAttribute("data-id")
        );
        if (txtMessage.text.trim() !== "") {
            if (curMsg >= 0) {
                dispatch({
                    type: "edit-msg",
                    payload: {
                        id: curMsg,
                        text: txtMessage.text,
                    },
                });
            } else {
                dispatch({
                    type: "send-msg",
                });
            }
            console.log(curMsg);
        }
    };
    const handleChange = e => {
        dispatch({
            type: "toggle-txt",
            payload: e.target.value,
        });
        // dispatch({
        //     type: "toggle-txt-id",
        //     payload: e.target.value,
        // });
    };
    return (
        <Form onSubmit={handleSend} data-id={txtMessage.id}>
            <Form.Label htmlFor="message">User {user}</Form.Label>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Message"
                    onChange={handleChange}
                    id="message"
                    value={txtMessage.text}
                />
                <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    type="submit">
                    {"📤"}
                </Button>
            </InputGroup>
        </Form>
    );
};

export default ChatForm;
