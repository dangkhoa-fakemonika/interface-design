import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function FeedCarouselArrow(props){
    const { className, style, onClick, direction} = props;
    return (
        <div className={"block text-background-pop " } onClick={onClick}>
            {direction === "left" ? <FaChevronLeft size={40}/> : <FaChevronRight size={40}/>}
        </div>
    )
}

export default FeedCarouselArrow