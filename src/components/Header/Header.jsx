import SideBarPopover from "@/components/SideBar/SideBarPopover.jsx";
import {NavLink} from "react-router";
import HeaderSearchBar from "@/components/Header/HeaderSearchBar.jsx";
import HeaderLoginButton from "@/components/Header/HeaderLoginButton.jsx";

function Header(props){
    const {toggleOnSearch, setSearchValue} = props;

    return (
        <div className={"flex flex-row w-screen bg-background-light p-2 items-center justify-between"}>
            <div className={"flex flex-row justify-start items-center gap-2 w-2/3"}>
                <SideBarPopover/>
                <NavLink to={"/"}>
                    <img src={"./logo.png"} alt={"page logo"} className={"w-[200px]"}/>
                </NavLink>
                <HeaderSearchBar openSearch={toggleOnSearch} setSearchValue={setSearchValue}/>
            </div>
            <div>
                <HeaderLoginButton/>
            </div>

        </div>
    );
}

export default Header;