import RatingStars from "@/components/misc/RatingStars.jsx";
import {FaUserPlus} from "react-icons/fa6";
import {MdInsights} from "react-icons/md";

function GameItemListEntry(){


    return (
        <div className={"w-full flex flex-row max-h-1/6 min-h-[160px] bg-background-light p-4 gap-4"}>
            <img
                src={"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973530/header.jpg?t=1747619569"}
                alt={"something"}
                className={"h-full object-cover"}
            />
            <div className={"w-full flex flex-col "}>
                <div className={"w-full h-fit flex flex-row gap-2 items-center"}>
                    <div className={"text-lg"}>Limbus Company</div>
                    <RatingStars ratings={4.5} size={20}/>
                    <div className={"text-main-accent ml-auto"}>Free to play</div>
                </div>

                <div className={"opacity-60"}>Lorem Ispum</div>

                <div className={"w-full flex flex-row justify-start gap-4 text-background-contrast mt-auto"}>
                    <div className={"w-fit flex flex-row gap-2 text-center items-center"}>
                        <FaUserPlus/>
                        <div>
                            1699 last month
                        </div>
                    </div>
                    <div className={"w-fit flex flex-row gap-2 text-center items-center"}>
                        <MdInsights/>
                        <div>
                            1240 last month
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameItemListEntry