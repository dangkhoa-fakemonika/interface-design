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
            <div className={"w-1/5 h-full flex flex-col gap-2 items-center py-4 px-2 border-r-2 border-contrast-background-alt"}>
                <div className={"text-heading-2 dark:text-text text-contrast-background-alt"}>
                    Frequently Asked
                </div>
                {
                    frequentlyAsked.map((category) => (
                        <div className={"w-full text-section-title text-center italic p-1 dark:border dark:border-background-pop dark:hover:border-main-accent text-white dark:text-text bg-contrast-background-alt dark:bg-background-light rounded-xl"}>
                            {category}
                        </div>
                    ))
                }
            </div>

            <div className={"w-4/5 h-full flex flex-col gap-2 px-2 py-4"}>
                <div className={"w-full h-fit flex flex-row justify-between items-center text-center px-2 py-4 shrink-0 " }>
                    <div className={"text-heading-2 flex flex-row gap-2 items-center text-contrast-background-alt dark:text-text"}>
                        <div className={"font-semibold text-heading-2 "}> GameStats Assistant </div>
                        <RiChatSmileAiLine size={24}/>
                    </div>
                    <IoClose size={32} className={"dark:text-text text-text-alt"}/>
                </div>
                <div className={"w-full h-full flex flex-col gap-2 justify-end shrink"}>
                    {
                        chatContent.map(({sender, message}) => (
                            <div
                                className={"text-normal-text text-text-alt dark:text-text max-w-2/3 " + (sender ? "self-end dark:bg-background-pop bg-background-light-alt border-2 border-contrast-background-alt dark:border-none py-1 px-2 rounded" : "self-start")}>
                                {
                                    sender ? message
                                    : <Typewriter input={message}/>
                                }
                            </div>
                        ))
                    }
                </div>
                <hr className={"my-2"}/>
                <div className={"w-full flex flex-row gap-2 "}>
                    {
                        recommendation.map((text) => (
                            <div className={"text-normal-text w-fit px-2 py-1 text-text-alt dark:text-text dark:bg-background-pop bg-background-light-alt border-2 border-contrast-background-alt dark:border-none rounded cursor-pointer"} onClick={() => addChatContent("Hi")}>
                                {text}
                            </div>
                        ))
                    }
                </div>
                <div
                    className={"bg-white flex flex-row dark:text-background text-text-alt border-2 border-contrast-background-alt dark:border-none w-full min-h-1/12 max-h-1/8 h-fit rounded items-center p-2 shrink-0"}>
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