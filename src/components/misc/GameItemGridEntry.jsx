import { useLayoutEffect, useRef, useState} from "react";
import {FaUserPlus} from "react-icons/fa6";
import {MdInsights} from "react-icons/md";
import RatingStars from "@/components/misc/RatingStars.jsx";

function GameItemGridEntry() {
    const thisRef = useRef(null);
    const [isHovering, setHovering] = useState(false);
    const [isRight, setRight] = useState(true);

    useLayoutEffect(() => {
        const rect = thisRef.current.getBoundingClientRect();
        // console.log(rect.x, rect.width, rect.x + rect.width * 2,window.innerWidth);
        if (rect.x + rect.width * 2 >= window.innerWidth){
            setRight(false);
        }
    }, [thisRef, isHovering])


    return (
        <div className={"group relative w-1/6 min-w-[180px] max-w-[240px] aspect-2/3 box-border"} ref={thisRef} onMouseEnter={() => setHovering(true)}
             onMouseLeave={() => setHovering(false)}>
            <img
                src={"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973530/header.jpg?t=1747619569"}
                alt={"something"}
                className={"w-full aspect-2/3 object-cover object-[7%_50%] group-hover:border-background-contrast group-hover:border-t group-hover:border-b " + (isRight ? "group-hover:border-l" : "group-hover:border-r")}
            />
            {
                !isHovering ?
                    <div
                        className={"absolute bottom-0 w-full h-1/4 bg-background-light/40 backdrop-blur-md flex flex-col justify-between p-2"}>
                        <div className={"w-full text-section-title"}>Limbus Company</div>
                        <div className={"w-full text-end text-normal-text text-main-accent"}>Free to play</div>
                    </div>
                    :
                    <div className={"absolute z-5 bg-background-light/40 backdrop-blur-lg bottom-0 w-full h-full gap-2 p-4 flex flex-col justify-between box-border border-background-contrast border-t border-b " + (isRight ? "border-r -right-[100%]" : "border-l -left-[100%]")}>
                        <div className={"w-full flex flex-col gap-2"}>
                            <div className={"font-medium text-normal-text"}>Limbus Company</div>
                            <div className={"opacity-60 font-medium text-small-text"}>Lorem Ispum</div>
                            <div>
                                <RatingStars ratings={4.5} size={20}/>
                            </div>
                        </div>
                        <div className={"w-full flex flex-col gap-1 text-sm"}>
                            <div className={"w-full flex flex-col justify-end gap-1 text-background-contrast px-1"}>
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
                            <div className={"w-full text-end text-normal-text font-medium text-main-accent"}>Free to play</div>
                        </div>
                    </div>
            }

        </div>
    )
}

export default GameItemGridEntry;