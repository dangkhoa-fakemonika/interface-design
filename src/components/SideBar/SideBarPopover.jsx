import {Popover} from "radix-ui";
import {TokensIcon} from "@radix-ui/react-icons";
import Sidebar from "@/components/SideBar/Sidebar.jsx";

function SideBarPopover(){
    return (
        <Popover.Root>
            <Popover.Trigger>
                <TokensIcon width={"48"} height={"48"} className={"text-background-pop opacity-20 hover:opacity-100 transition-opacity duration-300"}/>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content className={"bg-background h-screen w-[240px] shadow-[0_20px_10px] shadow-background-pop/50 z-50"} sideOffset={8}>
                    <Sidebar/>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}

export default SideBarPopover;