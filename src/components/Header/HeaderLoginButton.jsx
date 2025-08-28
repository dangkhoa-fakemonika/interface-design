import {PersonIcon} from "@radix-ui/react-icons";
import { NavLink } from "react-router";

function HeaderLoginButton(){
    return (
        <NavLink to={"/login"}>
            <div className={"group flex flex-row gap-2 dark:text-background-pop text-background-pop-alt opacity-60 hover:opacity-100 hover:translate-x-0 transition-all duration-300 translate-x-13"}>
                <PersonIcon width={"24"} height={"24"} className={"transition-opacity duration-300"}/>
                <div className={"group-hover:opacity-100 opacity-0 transition-all duration-300 text-label"}>
                    Log in
                </div>
            </div>
        </NavLink>
      
    );
}

export default HeaderLoginButton;