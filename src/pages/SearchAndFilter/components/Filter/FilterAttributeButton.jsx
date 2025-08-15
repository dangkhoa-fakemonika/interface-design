import {useMemo, useState} from "react";
import {IoCheckmark, IoClose} from "react-icons/io5";
import {LuEyeClosed} from "react-icons/lu";

function FilterAttributeButton(props){
    const {count, type} = props;
    const [state, toggleState] = useState(false);

    let color = "";
    if (type === "whitelist") color = "bg-main-accent";
    else color = "bg-secondary-accent";


    return !state ? (
        <button type={"button"} onClick={() => {toggleState(true)}} className={"w-full h-full flex flex-row gap-4 px-2 items-center justify-between " + color }>
            <div>{count}</div>
            {type === "whitelist" ? <IoCheckmark size={20}/> : <IoClose size={20}/>}
        </button>
    ) : (
        <button type={"button"} onClick={() => {toggleState(false)}} className={"w-full h-full flex flex-row gap-4 px-2 items-center justify-between opacity-80 " + (color + "/30")}>
            <LuEyeClosed size={22}/>
            {type === "whitelist" ? <IoCheckmark size={20}/> : <IoClose size={20}/>}
        </button>
    )
}

export default FilterAttributeButton