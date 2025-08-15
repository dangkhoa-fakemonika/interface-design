import {FaSearch} from "react-icons/fa";
import SearchGameCompareItem from "@/pages/CompareGames/components/SearchGameCompareItem.jsx";

function SearchGamesCompare(){
    return (
        <div className={"w-full h-full flex flex-col gap-2"}>
            <label
                className={"items-center flex flex-row gap-2 group focus-within:border-background-pop hover:border-background-pop border-2 border-background-light py-2 p-4 transition-colors duration-300 w-full"}>
                <input type={"text"} className={"outline-none text-label w-full"} placeholder={"Search a game..."}/>
                <FaSearch size={24}
                          className={"text-background-pop opacity-20 group-focus-within:opacity-100 group-hover:opacity-100 transition-opacity duration-300"}/>
            </label>

            <hr/>
            <div className={"text-heading-2"}>Recent</div>
            <div className={"w-full h-3/4 flex flex-col gap-2 overflow-y-scroll my-auto"}>
                {
                    new Array(6).fill("").map(() => (
                        <SearchGameCompareItem/>
                    ))
                }
            </div>

        </div>
    )
}

export default SearchGamesCompare;