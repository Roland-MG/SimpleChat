import ChatMessges from "./components/ChatMessages/ChatMessages";
import ChatForm from "./components/ChatForm/ChatForm";

function App() {
    return (
        <>
            <div style={{ width: "500px" }}>
                <ChatMessges />
                <br />
                <hr />
                <br />
                <ChatForm />
            </div>
        </>
    );
}

export default App;
