import {useState} from "react";
import {IoCheckmark, IoClose} from "react-icons/io5";
import {LuEyeClosed} from "react-icons/lu";

function FilterAttributeButton(props){
    const {count, type} = props;
    const [state, toggleState] = useState(false);

    return !state ? (
        <button type={"button"} onClick={() => {toggleState(true)}} className={"w-full h-full flex flex-row gap-4 px-2 items-center justify-between " + (type === "whitelist" ? "bg-main-accent" : "bg-secondary-accent")}>
            <div>{count}</div>
            {type === "whitelist" ? <IoCheckmark size={20}/> : <IoClose size={20}/>}
        </button>
    ) : (
        <button type={"button"} onClick={() => {toggleState(false)}} className={"w-full h-full flex flex-row gap-4 px-2 items-center justify-between " + (type === "whitelist" ? "bg-main-accent" : "bg-secondary-accent")}>
            <LuEyeClosed size={22}/>
            {type === "whitelist" ? <IoCheckmark size={20}/> : <IoClose size={20}/>}
        </button>
    )
}

export default FilterAttributeButton