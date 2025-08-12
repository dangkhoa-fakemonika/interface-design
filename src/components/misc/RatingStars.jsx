import {FaRegStar, FaStar} from "react-icons/fa";
import {FaRegStarHalfStroke} from "react-icons/fa6";

function RatingStars(props){
    const {ratings, size = 32} = props;
    const whole = Math.trunc(ratings);

    return (
        <div className={"w-fit flex flex-row gap-1"}>
            {
                new Array(whole).fill("").map(() => <FaStar className={"text-main-accent"} size={size}/>)
            }
            {
                ratings === Math.floor(ratings) ? <FaRegStar className={"text-main-accent"} size={size}/> : <FaRegStarHalfStroke className={"text-main-accent"} size={size}/>
            }
            {
                new Array(4 - Math.floor(ratings)).fill("").map(() => <FaRegStar className={"text-main-accent"} size={size}/>)
            }
        </div>
    )
}

export default RatingStars;