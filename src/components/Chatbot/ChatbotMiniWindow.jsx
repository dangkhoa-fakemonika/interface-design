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
        <div className={"w-[20vw] h-[50vh] flex flex-col border border-background-pop p-4 gap-6 bg-background justify-between"}>
            <div className={"w-full flex flex-row justify-between text-center items-center shrink-0"}>
                <div>GameStats Assistant</div>
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
                        <div className={" " + (sender ? "self-end bg-background-pop py-1 px-2 rounded" : "self-start")}>
                            {message}
                        </div>
                    ))
                }
            </div>

            <div className={"bg-white flex flex-row text-background w-full min-h-1/12 max-h-1/8 h-fit rounded items-center p-2 shrink-0"}>
                <textarea className={"w-full h-full outline-none resize-none"}/>
                <FaArrowCircleUp size={24} />
            </div>
        </div>
    )
}

export default ChatbotMiniWindow