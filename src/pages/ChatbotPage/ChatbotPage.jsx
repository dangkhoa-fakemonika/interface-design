import {IoClose} from "react-icons/io5";
import {FaArrowCircleUp} from "react-icons/fa";

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

    const chatContent = [
        {
            sender : true,
            message : "Hi"
        },
        {
            sender : false,
            message : "Hello"
        }
    ]

    return (
        <div className={"w-full h-full flex flex-row"}>
            <div className={"w-1/5 h-full flex flex-col gap-2 items-center py-4"}>
                <div className={"text-xl"}>
                    Frequently Asked
                </div>
                {
                    frequentlyAsked.map((category) => (
                        <div className={"w-full text-center italic p-1 border border-background-pop hover:border-main-accent "}>
                            {category}
                        </div>
                    ))
                }
            </div>

            <div className={"w-4/5 h-full flex flex-col gap-2 px-2 py-4"}>
                <div className={"w-full h-fit flex flex-row justify-between items-center text-center px-2 py-4 shrink-0"}>
                    <div className={"text-xl"}>
                        GameStats Assistant
                    </div>
                    <IoClose size={32}/>
                </div>
                <div className={"w-full h-full flex flex-col gap-2 justify-end shrink"}>
                    {
                        chatContent.map(({sender, message}) => (
                            <div
                                className={" " + (sender ? "self-end bg-background-pop py-1 px-2 rounded" : "self-start")}>
                                {message}
                            </div>
                        ))
                    }
                </div>
                <hr className={"my-2"}/>
                <div className={"w-full flex flex-row gap-2"}>
                    {
                        recommendation.map((text) => (
                            <div className={"w-fit px-2 py-1 bg-background-pop text-white rounded cursor-pointer"}>
                                {text}
                            </div>
                        ))
                    }
                </div>
                <div
                    className={"bg-white flex flex-row text-background w-full min-h-1/12 max-h-1/8 h-fit rounded items-center p-2 shrink-0"}>
                    <textarea className={"w-full h-full outline-none resize-none"}/>
                    <FaArrowCircleUp size={24}/>
                </div>
            </div>
        </div>
    )
}

export default ChatbotPage;