import GameItemExtendable from "@/components/misc/GameItemExtendable.jsx";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {useRef} from "react";

function GamesSlider(){
    const thisRef = useRef(null);
    const scrollToLeft = () => {
        thisRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
        })
    }

    const scrollToRight = () => {
        thisRef.current.scrollTo({
            left: thisRef.current.scrollWidth,
            behavior: "smooth",
        })
    }

    return (
        <div className={"relative overflow-hidden w-[80vw]"}>
            <div className={"absolute bg-background-pop/30 h-full flex p-4 flex-col justify-center left-0 z-4 opacity-0 hover:opacity-100 duration-300 transition-opacity"} onClick={scrollToLeft}>
                <FaChevronLeft size={24}/>
            </div>
            <div className={"absolute bg-background-pop/30 h-full flex p-4 flex-col justify-center right-0 z-4 opacity-0 hover:opacity-100 duration-300 transition-opacity"} onClick={scrollToRight}>
                <FaChevronRight size={24}/>
            </div>

            <div className={"relative w-full overflow-x-scroll"} style={{scrollbarWidth : "none"}} ref={thisRef}>
                <div className={"w-fit flex-row flex gap-16"}>
                    {
                        Array.from({ length: 10 }, (_, i) => i + 1).map((i) => {
                                const newNum = (i + Math.floor(Math.random() * (17))) % 17
                                return (
                                    <GameItemExtendable num={newNum}/>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default GamesSlider;