import GameItemGridEntry from "@/components/misc/GameItemGridEntry.jsx";
import {LuLayoutDashboard, LuLayoutList} from "react-icons/lu";
import {useState} from "react";
import GameItemListEntry from "@/components/misc/GameItemListEntry.jsx";
import {Tooltip} from "radix-ui";
import PagePagination from "@/pages/SearchAndFilter/components/Search/PagePagination.jsx";

function SearchEntryFull() {
    const [layoutType, setLayoutType] = useState(false);

    return (
        <div className={"w-full h-fit flex flex-col gap-2"}>
            <div className={"w-full flex flex-row justify-between items-center"}>
                <div className={"text-xl px-8 py-4"}>
                    Found 170 matches
                </div>
                <Tooltip.Provider>
                    <Tooltip.Root>
                        <Tooltip.Trigger className={"w-fit flex flex-row gap-2"}>
                            <LuLayoutDashboard size={32} onClick={() => setLayoutType(false)} className={"hover:text-background-contrast transition-colors duration-300 " + (!layoutType ? "text-background-contrast" : "text-background-pop")}/>
                            <LuLayoutList size={32} onClick={() => setLayoutType(true)} className={"hover:text-background-contrast transition-colors duration-300 " + (layoutType ? "text-background-contrast" : "text-background-pop")}/>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                            <Tooltip.Content side={"left"} sideOffset={6} className={"border-background-contrast border rounded p-2"}>
                                Toggle result layout
                                <Tooltip.Arrow className={"fill-background-contrast"}/>
                            </Tooltip.Content>
                        </Tooltip.Portal>
                    </Tooltip.Root>
                </Tooltip.Provider>
            </div>

            <div className={"w-full flex flex-row justify-end"}>
                <PagePagination/>
            </div>

            {
                !layoutType ?
                    <div
                        className={"w-full h-screen flex flex-row flex-wrap gap-8 items-center justify-center overflow-y-scroll"}>
                        {
                            new Array(40).fill("").map(() => <GameItemGridEntry/>)
                        }
                    </div>
                    :
                    <div
                        className={"w-full h-screen flex flex-col gap-8 items-center justify-start overflow-y-scroll ps-8"}>
                        {
                            new Array(40).fill("").map(() => <GameItemListEntry/>)
                        }
                    </div>
            }
        </div>
    )
}

export default SearchEntryFull;