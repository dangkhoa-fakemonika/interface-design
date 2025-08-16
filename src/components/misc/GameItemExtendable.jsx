import {useLayoutEffect, useRef, useState} from "react";
import {FaUserPlus} from "react-icons/fa6";
import {MdInsights} from "react-icons/md";
import RatingStars from "@/components/misc/RatingStars.jsx";

function GameItemExtendable() {
    const thisRef = useRef(null);
    const [isHovering, setHovering] = useState(false);

    return (
        <div
            className={"flex flex-row group relative w-1/6 box-border hover:border hover:dark:border-background-pop hover:border-contrast-background-alt " + (isHovering ? "aspect-4/3 min-w-[360px] max-w-[720px]" : "aspect-2/3 min-w-[180px] max-w-[360px]")}
            ref={thisRef} onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}>
            <img
                src={"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973530/header.jpg?t=1747619569"}
                alt={"something"}
                className={"flex-1 aspect-2/3 object-cover object-[7%_50%] z-1"}
            />
            <div
                className={"dark:bg-background-light/40 bg-background-alt/40 backdrop-blur-lg h-full gap-2 p-4 flex flex-col justify-between aspect-2/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}>
                <div className={"w-full flex flex-col gap-2"}>
                    <div className={"font-medium text-normal-text dark:text-text text-contrast-background-alt"}>Limbus Company</div>
                    <div className={"dark:opacity-60 font-medium text-small-text text-extra-alt dark:text-text"}>Lorem Ispum</div>
                    <div>
                        <RatingStars ratings={4.5} size={20}/>
                    </div>
                </div>
                <div className={"w-full flex flex-col gap-1 text-sm"}>
                    <div className={"w-full flex flex-col justify-end gap-1 dark:text-background-contrast text-contrast-background-alt px-1"}>
                        <div className={"w-fit flex flex-row gap-2 text-center items-center"}>
                            <FaUserPlus/>
                            <div className={"text-small-text"}>
                                1699 last month
                            </div>
                        </div>
                        <div className={"w-fit flex flex-row gap-2 text-center items-center"}>
                            <MdInsights/>
                            <div className={"text-small-text"}>
                                1240 last month
                            </div>
                        </div>
                    </div>
                    <div className={"w-full text-end text-normal-text font-medium dark:text-main-accent text-main-accent-alt"}>Free to play</div>
                </div>
            </div>
            <div
                className={"absolute bottom-0 w-full h-1/4 bg-background-light/40 backdrop-blur-md flex flex-col justify-between p-2 group-hover:opacity-0 z-2 transition-all duration-300"}>
                <div className={"w-full text-section-title dark:text-text text-contrast-background-alt"}>Limbus Company</div>
                <div className={"w-full text-end text-normal-text dark:text-main-accent text-main-accent-alt"}>Free to play</div>
            </div>
        </div>
    )
}

export default GameItemExtendable;