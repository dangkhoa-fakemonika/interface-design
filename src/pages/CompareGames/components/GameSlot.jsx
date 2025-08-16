import {Popover} from "radix-ui";
import SearchGamesCompare from "@/pages/CompareGames/components/SearchGamesCompare.jsx";
import {useState} from "react";

function GameSlot() {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={"group w-full h-full flex flex-row dark:bg-gradient-to-t dark:from-background-pop/20 dark:to-background-pop/60 dark:bg-background bg-background-light-alt p-4 gap-4 dark:text-text text-text-alt dark:border-none border border-contrast-background-alt dark:shadow-none shadow-xl hover:bg-background-pop-alt dark:hover:bg-background"} >
            <img
                src={"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973530/header.jpg?t=1747619569"}
                alt={"something"}
                className={"w-1/3 aspect-2/1 object-cover object-[50%_50%]"}
            />
            <div className={"relative w-full grow overflow-hidden flex flex-col"}>
                <div className={"w-full flex flex-row justify-between items-center"}>
                    <div className={"text-heading-1"}>Limbus Company</div>
                    <div className={"opacity-60 italic text-heading-3"}>Project Moon</div>
                </div>

                <Popover.Root open={open} onOpenChange={(b) => setOpen(b)}>
                    <Popover.Trigger
                        className={"absolute group-hover:bottom-0 w-full dark:bg-gradient-to-b dark:from-background-contrast/60 dark:to-background-contrast/40 dark:bg-background-pop bg-background-light-alt dark:border-none border border-contrast-background-alt p-2 transition-all duration-150 " + (open ? "bottom-0" : "-bottom-20")}>
                        Select another game
                    </Popover.Trigger>
                    <Popover.Portal>
                        <Popover.Content side={"bottom"} sideOffset={4} align={"end"} sticky={"partial"}
                                         className={"w-full h-[480px] dark:bg-background-light bg-background-light-alt dark:border-none border border-contrast-background-alt p-4 shadow-background-pop/20 shadow-2xl"}>
                            <SearchGamesCompare/>
                        </Popover.Content>
                    </Popover.Portal>
                </Popover.Root>

                {/*<button type={"button"}*/}
                {/*        onClick={() => setOpen(true)}*/}
                {/*        className={"absolute -bottom-20 group-hover:bottom-0 w-full bg-gradient-to-b from-background-contrast/60 to-background-contrast/40 p-2 transition-all duration-150 "}>*/}
                {/*    Select another game*/}
                {/*</button>*/}
            </div>

        </div>
    )
}

export default GameSlot;