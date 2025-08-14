import SearchEntry from "@/components/SearchOverlay/SearchEntry.jsx";
import {useNavigate} from "react-router";

function SearchResults(){
    const navigate = useNavigate();

    return (
        <div className={"w-full flex flex-col gap-8 items-center"}>
            <div className={"w-full flex flex-row justify-around px-8"}>
                <div className={"w-1/2 p-4 flex flex-col gap-2"}>
                    <div className={"font-bold text-heading-1"}>
                        Top matches
                    </div>
                    <SearchEntry/>
                    <SearchEntry/>
                    <SearchEntry/>
                </div>
                <div className={"w-1/2 p-4 flex flex-col gap-2"}>
                    <div className={"font-bold text-heading-1"}>
                        You may also like
                    </div>
                    <SearchEntry/>
                    <SearchEntry/>
                    <SearchEntry/>
                </div>
            </div>

            <button type={"button"} onClick={() => navigate("/search-filters")} className={"w-1/2 p-2 text-label text-center opacity-40 hover:border hover:border-main-accent hover:text-main-accent hover:opacity-100 transition-all duration-300"}>
                Click here to go to view all results
            </button>
        </div>
    )
}

export default SearchResults