import {useState} from "react";
import {FaHeart, FaRegHeart} from "react-icons/fa";

function FavoriteButton(){
    const [state, switchState] = useState(false);
    return !state ? (
        <button type={"button"} className={"text-main-accent"} onClick={() => switchState(true)}>
            <FaRegHeart size={24}/>
        </button>
    ) : (
        <button type={"button"} className={"text-main-accent"} onClick={() => switchState(false)}>
            <FaHeart size={24}/>
        </button>
    )
}

export default FavoriteButton