import {IoCheckmark, IoClose} from "react-icons/io5";
import {useState} from "react";

function FilterListItem(){
    const [state, changeState] = useState("normal");

    const checkClick = () => {
        if (state === "normal" || state === "blacklisted") changeState("whitelisted");
        else changeState("normal");
    }

    const crossClick = () => {
        if (state === "normal" || state === "whitelisted") changeState("blacklisted");
        else changeState("normal");
    }

    return (
        <div className={"w-full flex flex-row justify-end gap-2 items-center " + (state === "normal" ? " text-white" : state === "whitelisted" ? " text-main-accent" : " text-secondary-accent")}>
            <div className={"mr-auto"}>Tag name</div>
            <IoCheckmark size={20} onClick={checkClick} className={state === "blacklisted" ? "opacity-40" : "opacity-100"}/>
            <IoClose size={20} onClick={crossClick} className={state === "whitelisted" ? "opacity-40" : "opacity-100"}/>
        </div>
    );
}

export default FilterListItem;