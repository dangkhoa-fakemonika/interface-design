import {Popover} from "radix-ui";
import {TokensIcon} from "@radix-ui/react-icons";
import SideBarPopover from "@/components/lesser-components/SideBarPopover.jsx";
import {NavLink} from "react-router";
import HeaderSearchBar from "@/components/lesser-components/HeaderSearchBar.jsx";

function Header(){
    return (
        <div className={"flex flex-row w-screen bg-background-light p-2 items-center justify-between"}>
            <div className={"flex flex-row justify-start items-center"}>
                <SideBarPopover/>
                <NavLink to={"/"}>
                    <img src={"./logo.png"} alt={"page logo"} className={"w-[200px]"}/>
                </NavLink>
                <HeaderSearchBar/>
            </div>



        </div>
    );
}

export default Header;