import ChatbotFloatingButton from "@/components/Chatbot/ChatbotFloatingButton.jsx";
import {useState} from "react";
import ChatbotMiniWindow from "@/components/Chatbot/ChatbotMiniWindow.jsx";
import {useLocation} from "react-router";

function ChatbotWidget(){
    const [chatState, changeChatState] = useState(0);

    const switchToIcon = () => {
        changeChatState(0);
    }

    const switchToMini = () => {
        changeChatState(1);
    }

    const location = useLocation();

    if (location.pathname === "/ai") return (<div/>);

    return chatState === 0 ? (
        <div className={"fixed bottom-8 right-8 z-50"}>
            <ChatbotFloatingButton changeState={switchToMini}/>
        </div>
    ) :
        chatState === 1 ? (
            <div className={"fixed bottom-8 right-8 z-50"}>
                <ChatbotMiniWindow changeState={switchToIcon}/>
            </div>
        ) :
            (
                <div></div>
            )
}

export default ChatbotWidget