import {IoClose} from "react-icons/io5";
import {FaArrowCircleUp} from "react-icons/fa";
import {RiChatSmileAiLine} from "react-icons/ri";
import {useState} from "react";
import Typewriter from "@/pages/ChatbotPage/components/Typewriter.jsx";

function ChatbotPage(){
    const frequentlyAsked = [
        "News Summary",
        "Games Recommendation",
        "Upcoming Releases",
        "Market State",
        "Trending Games"
    ]

    const recommendation = [
        "Help",
        "Ayo this might be bussin",
        "How do I use this?"
    ]

    const [chatContent, setChatContent] = useState([
        {
            sender : false,
            message : "Hello, I am the among us assistant. How may I help today?"
        }
    ])

    const addChatContent = ((s) => {
        setChatContent(prevState => {
            const newState = [...prevState];
            newState.push({
                sender: true,
                message: s
            });
            return newState;
        });

        setTimeout(addPromptContent, 1000)
    })

    const addPromptContent = (() => {

        setChatContent(prevState => {
            const newState = [...prevState];
            newState.push({
                sender: false,
                message: "Among Us Among Us Among Us Among Us Among Us Among Us Among Us Among Us Among Us Among Us Among Us Among Us Among Us Among Us Among Us Among Us Among Us Among Us "
            });
            return newState;
        });
    })

    const [typedMessage, setTypeMessage] = useState("");

    return (
        <div className={"w-full h-full flex flex-row"}>
            <div className={"w-1/5 h-full flex flex-col gap-2 items-center py-4"}>
                <div className={"text-heading-2"}>
                    Frequently Asked
                </div>
                {
                    frequentlyAsked.map((category) => (
                        <div className={"w-full text-section-title text-center italic p-1 border border-background-pop hover:border-main-accent "}>
                            {category}
                        </div>
                    ))
                }
            </div>

            <div className={"w-4/5 h-full flex flex-col gap-2 px-2 py-4"}>
                <div className={"w-full h-fit flex flex-row justify-between items-center text-center px-2 py-4 shrink-0"}>
                    <div className={"text-heading-2 flex flex-row gap-2 items-center"}>
                        <div> GameStats Assistant </div>
                        <RiChatSmileAiLine size={24}/>
                    </div>
                    <IoClose size={32}/>
                </div>
                <div className={"w-full h-full flex flex-col gap-2 justify-end shrink"}>
                    {
                        chatContent.map(({sender, message}) => (
                            <div
                                className={"text-normal-text max-w-2/3 " + (sender ? "self-end bg-background-pop py-1 px-2 rounded" : "self-start")}>
                                {
                                    sender ? message
                                    : <Typewriter input={message}/>
                                }
                            </div>
                        ))
                    }
                </div>
                <hr className={"my-2"}/>
                <div className={"w-full flex flex-row gap-2"}>
                    {
                        recommendation.map((text) => (
                            <div className={"text-normal-text w-fit px-2 py-1 bg-background-pop text-white rounded cursor-pointer"} onClick={addChatContent}>
                                {text}
                            </div>
                        ))
                    }
                </div>
                <div
                    className={"bg-white flex flex-row text-background w-full min-h-1/12 max-h-1/8 h-fit rounded items-center p-2 shrink-0"}>
                    <textarea className={"w-full h-full outline-none resize-none text-normal-text"} onChange={(event) => {setTypeMessage(event.target.value)}} value={typedMessage}/>
                    <FaArrowCircleUp size={24} onClick={() => {
                        addChatContent(typedMessage);
                        setTypeMessage("");
                    }}/>
                </div>
            </div>
        </div>
    )
}

export default ChatbotPage;