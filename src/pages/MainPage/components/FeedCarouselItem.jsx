import Tags from "@/components/misc/Tags.jsx";
import { FaUserPlus } from "react-icons/fa6";
import { MdInsights } from "react-icons/md";
import {useNavigate} from "react-router";

function FeedCarouselItem(){
    const navigate = useNavigate();

    return (
        <div className={"w-full flex flex-col p-8 gap-4 bg-gradient-to-t from-background to-background-light hover:to-20% transition-all duration-200 cursor-pointer"} onClick={() => {navigate("/game-page")}}>
            <div className={"w-full flex flex-row justify-between gap-4"}>
                <img
                    src={"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973530/header.jpg?t=1747619569"}
                    alt={"something"}
                    className={"w-2/3 aspect-video object-cover"}
                />
                <div className={"w-1/3 flex flex-col gap-2"}>
                    <img
                        src={"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973530/ss_1ae814b7c6485f3096d351e775137a7bca39a6c7.600x338.jpg?t=1747619569"}
                        alt={"1"}
                        className={"w-full aspect-video"}
                    />
                    <img
                        src={"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973530/ss_c14bbf4d204aab3372dfb89b1101556dde999ac1.600x338.jpg?t=1747619569"}
                        alt={"2"}
                        className={"w-full aspect-video"}
                    />
                </div>
            </div>

            <div className={"w-full flex flex-row justify-between"}>
                <div className={"text-3xl font-bold"}>
                    Limbus Company
                </div>
                <div className={"text-2xl font-medium text-main-accent"}>
                    Free to play
                </div>
            </div>

            <div className={"w-full flex flex-row flex-wrap gap-2"}>
                <Tags text={"Action"}/>
                <Tags text={"Visual Novel"}/>
                <Tags text={"Turn-based"}/>
            </div>

            <div className={"w-full flex flex-row justify-end gap-2 text-background-contrast gap-4"}>
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
    )
}

export default FeedCarouselItem;