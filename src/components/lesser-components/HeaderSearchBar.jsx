import {MagnifyingGlassIcon} from "@radix-ui/react-icons";

function HeaderSearchBar(){
    return (
        <label className={"flex flex-row gap-2 group focus-within:border-background-pop border-2 border-background-light p-2 transition-colors duration-300"}>
            <MagnifyingGlassIcon width={"24"} height={"24"} className={"text-background-pop opacity-20 group-focus-within:opacity-100 transition-opacity duration-300"}/>
            <input type={"text"} className={"outline-none text-lg"} placeholder={"Search a game..."}/>
        </label>
    )
}

export default HeaderSearchBar;