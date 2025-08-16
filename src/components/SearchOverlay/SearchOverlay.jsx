import {IoClose} from "react-icons/io5";
import SearchTooltips from "@/components/SearchOverlay/SearchTooltips.jsx";
import SearchResults from "@/components/SearchOverlay/SearchResults.jsx";

function SearchOverlay(props) {
    const {searchValue, closeOverlay} = props;

    return (
        <div className={"absolute w-full h-full flex flex-col grow dark:bg-background-light/40 bg-background-light-alt/40 backdrop-blur-sm justify-start overflow-hidden z-20"}>
            <div className={"self-end p-4 dark:text-text text-contrast-background-alt"}>
                <IoClose size={40} onClick={closeOverlay}/>
            </div>
            <div className={"w-full"} onClick={closeOverlay}>
                {
                    searchValue.trim() === "" ? <SearchTooltips/> : <SearchResults/>
                }
            </div>
        </div>
    )
}

export default SearchOverlay;