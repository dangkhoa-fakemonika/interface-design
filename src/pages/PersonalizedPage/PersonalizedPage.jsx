import GamesSlider from "@/pages/PersonalizedPage/components/GamesSlider.jsx";
import {useRef} from "react";

function PersonalizedPage() {
    const mySections = [
        "Your wishlist",
        "Play it solo",
        "Experience with friends",
        "On recent activities",
        "Trending",
        "From similar creators",
        "Something different",
        "People also play"
    ]
    const myRefs = useRef(new Array(mySections.length).fill(null));

    const scrollToSection = (i) => {
        myRefs.current[i].scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <div className={"w-full flex flex-col gap-8 items-center overflow-y-scroll"}>
            <div className={"w-full flex flex-row justify-center"}>
                <div className={"w-[80vw] py-4 flex flex-row gap-8 overflow-x-scroll"}>
                    {
                        Array.from({length: mySections.length}, (_, i) => i).map((i) => (
                            <button
                                type={"button"}
                                className={"whitespace-nowrap text-normal-text p-4 rounded-full bg-background-light border border-background-light hover:border-background-pop hover:text-background-pop cursor-pointer transition-colors duration-300"}
                                onClick={() => {
                                    scrollToSection(i);
                                }}
                            >

                                {mySections[i]}
                            </button>
                        ))
                    }
                </div>
            </div>
            {
                Array.from({length: mySections.length}, (_, i) => i).map((i) => (
                    <div className={"flex flex-col gap-4"} ref={(el) => {myRefs.current[i] = el}} id={i + "_temp"}>
                        <div className={"font-medium text-heading-2 text-background-pop"}>
                            {mySections[i]}
                        </div>
                        <GamesSlider/>
                    </div>
                ))

            }
        </div>
    )
}

export default PersonalizedPage;