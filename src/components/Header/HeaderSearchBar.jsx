import {useMemo, useState} from "react";
import {FaSearch} from "react-icons/fa";
import {useLocation} from "react-router";

function HeaderSearchBar(props){
    const [value, setValue] = useState("");
    const {openSearch, setSearchValue} = props;

    const location = useLocation();

    useMemo(() => {
        setSearchValue(value);
    }, [value])

    if (location.pathname === "/search-filters") return (<div/>);

    return (
        <label className={"flex flex-row gap-2 group focus-within:border-background-pop-alt hover:border-background-pop-alt border-contrast-background-alt dark:focus-within:border-background-pop dark:hover:border-background-pop border-2 dark:border-background-light p-2 transition-colors duration-300 w-full"}>
            <FaSearch size={24} className={"dark:text-background-pop text-background-pop-alt opacity-20 group-focus-within:opacity-100 group-hover:opacity-100 transition-opacity duration-300"}/>
            <input type={"text"} className={"outline-none text-label"} placeholder={"Search a game..."} onFocus={openSearch} value={value} onChange={(e) => {setValue(e.target.value)}}/>
        </label>
    )
}

export default HeaderSearchBar;