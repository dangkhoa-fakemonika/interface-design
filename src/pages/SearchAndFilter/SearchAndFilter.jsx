import SearchBar from "@/pages/SearchAndFilter/components/Search/SearchBar.jsx";
import FiltersTable from "@/pages/SearchAndFilter/components/Filter/FiltersTable.jsx";
import SearchEntryFull from "@/pages/SearchAndFilter/components/Search/SearchEntryFull.jsx";

function SearchAndFilter() {
    return (
        <div className={"w-full flex flex-col gap-2 p-4"}>
            <SearchBar/>
            <div className={"w-full flex flex-row justify-between"}>
                <div className={"w-1/4 flex flex-col gap-2 h-fit"}>
                    <FiltersTable/>
                    <button type={"button"} className={"bg-main-accent w-fit p-2"}>Export current results</button>
                </div>
                <div className={"w-3/4"}>
                    <SearchEntryFull/>
                </div>
            </div>
        </div>
    )
}

export default SearchAndFilter;
