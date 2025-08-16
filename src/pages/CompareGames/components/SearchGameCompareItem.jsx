import RatingStars from "@/components/misc/RatingStars.jsx";
import {FaUserPlus} from "react-icons/fa6";
import {MdInsights} from "react-icons/md";

function SearchGameCompareItem(){
    return (
        <div className={"w-full flex flex-row max-h-1/8 min-h-[80px] dark:bg-background-pop/30 bg-background-light-alt p-2 gap-4 dark:hover:bg-background-pop/60 hover:bg-background-pop-alt dark:border-none border-text-alt border shadow-xl transition-colors duration-300"}>
            <img
                src={"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973530/header.jpg?t=1747619569"}
                alt={"something"}
                className={"h-full object-cover"}
            />
            <div className={"w-full flex flex-col -m-1 "}>
                <div className={"text-label text-text-alt dark:text-text"}>Limbus Company</div>
                <div className={"italic text-section-title text-text-alt dark:text-text"}>Project Moon</div>
            </div>
        </div>
    );
}

export default SearchGameCompareItem;