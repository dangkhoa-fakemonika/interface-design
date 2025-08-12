import { RiChatSmileAiLine } from "react-icons/ri";
import { Tooltip } from "radix-ui";

function ChatbotFloatingButton(props) {
    const {changeState} = props;

    return (
        <div className={"border border-background-pop bg-background rounded-full p-2 cursor-pointer"}>
            <Tooltip.Provider>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                        <RiChatSmileAiLine size={32} onClick={changeState}/>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content
                            side={"left"}
                            className={"p-2 rounded bg-white leading-none text-background"}
                            sideOffset={20}
                        >
                            Chat with AI Assistant
                            <Tooltip.Arrow className="fill-white" />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Provider>
        </div>
    )
}

export default ChatbotFloatingButton;