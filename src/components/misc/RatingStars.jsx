import {FaRegStar, FaStar} from "react-icons/fa";
import {FaRegStarHalfStroke} from "react-icons/fa6";

function RatingStars(props){
    const {ratings, size = 32} = props;
    const whole = Math.trunc(ratings);

    return (
        <div className={"w-fit flex flex-row gap-1 dark:text-main-accent text-main-accent-alt"}>
            {
                new Array(whole).fill("").map(() => <FaStar className={""} size={size}/>)
            }
            {
                ratings === Math.floor(ratings) ? <FaRegStar className={""} size={size}/> : <FaRegStarHalfStroke className={""} size={size}/>
            }
            {
                new Array(4 - Math.floor(ratings)).fill("").map(() => <FaRegStar className={""} size={size}/>)
            }
        </div>
    )
}

export default RatingStars;