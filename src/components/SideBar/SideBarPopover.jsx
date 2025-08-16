import {Popover} from "radix-ui";
import {TokensIcon} from "@radix-ui/react-icons";
import Sidebar from "@/components/SideBar/Sidebar.jsx";

function SideBarPopover(){
    return (
        <Popover.Root>
            <Popover.Trigger>
                <TokensIcon width={"48"} height={"48"} className={"dark:text-background-pop text-background-pop-alt opacity-20 hover:opacity-100 transition-opacity duration-300"}/>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content className={"dark:bg-background bg-contrast-background-alt h-screen w-[240px] dark:shadow-[0_20px_10px] dark:shadow-background-pop/50 z-50"} sideOffset={8}>
                    <Sidebar/>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}

export default SideBarPopover;