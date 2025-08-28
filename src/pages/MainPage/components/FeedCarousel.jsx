import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeedCarouselItem from "@/pages/MainPage/components/FeedCarouselItem.jsx";
import FeedCarouselArrow from "@/pages/MainPage/components/FeedCarouselArrow.jsx";
import {useRef} from "react";

function FeedCarousel(){
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
        customPaging : (i) => (<div className={"bg-background-pop rounded-full aspect-square w-[10px] h-[10px] mt-6"}></div>),
        // nextArrow : <FeedCarouselArrow direction={"right"}/>,
        // prevArrow : <FeedCarouselArrow direction={"left"}/>
    };

    return (
        <div className={"w-full flex flex-row justify-around items-center pb-16"}>
            <FeedCarouselArrow direction={"left"} onClick={() => sliderRef.current.slickPrev()}/>
            <div className={"w-1/2"}>
                <Slider {...settings}  ref={sliderRef}>
                    {
                        Array.from({ length: 5 }, (_, i) => i + 1).map(
                            (i) =>
                                    <FeedCarouselItem num={(i + Math.floor(Math.random() * (17))) % 17}/>
                        )
                    }
                    {/*<FeedCarouselItem/>*/}
                    {/*<FeedCarouselItem/>*/}
                    {/*<FeedCarouselItem/>*/}
                </Slider>
            </div>
            <FeedCarouselArrow direction={"right"} onClick={() => sliderRef.current.slickNext()}/>
        </div>
    );
}

export default FeedCarousel;