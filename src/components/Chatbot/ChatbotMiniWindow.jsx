import {FaArrowCircleUp, FaExpand} from "react-icons/fa";
import {FaChevronDown} from "react-icons/fa6";
import {useState} from "react";
import {useNavigate} from "react-router";

function ChatbotMiniWindow(props){
    const {changeState} = props;
    const navigate = useNavigate();

    const [chatContent, setChatContent] = useState([
        {
            sender : true,
            message : "Get me the latest news"
        },
        {
            sender : false,
            message : "No"
        }
    ]);

    return (
        <div className={"w-[20vw] h-[50vh] flex flex-col border dark:border-background-pop p-4 gap-6 dark:bg-background dark:text-text text-text-alt justify-between bg-background-alt border-contrast-background-alt"}>
            <div className={"w-full flex flex-row justify-between text-center items-center shrink-0"}>
                <div className={"font-semibold"}>GameStats Assistant</div>
                <div className={"w-fit flex flex-row gap-2"}>
                    <FaExpand onClick={() => {
                        navigate("/ai");
                        changeState();
                    }}/>
                    <FaChevronDown onClick={changeState}/>
                </div>
            </div>

            <div className={"w-full h-full flex flex-col gap-2 justify-end shrink"}>
                {
                    chatContent.map(({sender, message}) => (
                        <div className={" " + (sender ? "self-end dark:bg-background-pop bg-background-light-alt border border-contrast-background-alt dark:border-none py-1 px-2 rounded" : "self-start")}>
                            {message}
                        </div>
                    ))
                }
            </div>

            <div className={"bg-white flex flex-row text-background w-full min-h-1/12 max-h-1/8 h-fit rounded items-center p-2 shrink-0 dark:border-none border border-contrast-background-alt"}>
                <textarea className={"w-full h-full outline-none resize-none"}/>
                <FaArrowCircleUp size={24} />
            </div>
        </div>
    )
}

export default ChatbotMiniWindow