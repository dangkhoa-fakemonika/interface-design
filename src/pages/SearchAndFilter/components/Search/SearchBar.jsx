import {FaSearch} from "react-icons/fa";

function SearchBar(){
    return (
        <label
            className={"items-center flex flex-row gap-2 group focus-within:border-background-pop hover:border-background-pop border-2 border-background-light py-2 p-4 transition-colors duration-300 w-full"}>
            <input type={"text"} className={"outline-none text-heading-2 w-full"} placeholder={"Search a game..."}/>
            <FaSearch size={24}
                      className={"text-background-pop opacity-20 group-focus-within:opacity-100 group-hover:opacity-100 transition-opacity duration-300"}/>
        </label>
    );
}

export default SearchBar;