import FeedCarousel from "@/pages/MainPage/components/FeedCarousel.jsx";
import Tags from "@/components/misc/Tags.jsx";

function MainPage(){
    return (
        <div className={"w-full flex flex-col gap-4 items-center pt-4 h-screen overflow-y-scroll"}>
            <div className={"w-full flex flex-row gap-8 items-center justify-center"}>
                <div className={"text-heading-1 font-bold"}>Currently On-Sale</div>
                <Tags text={"Up to 90%"}/>
            </div>
            <FeedCarousel/>
            <div className={"w-full flex flex-row gap-8 items-center justify-center"}>
                <div className={"text-heading-1 font-bold"}>Currently On-Sale</div>
                <Tags text={"Up to 90%"}/>
            </div>
            <FeedCarousel/>
            <div className={"w-full flex flex-row gap-8 items-center justify-center"}>
                <div className={"text-heading-1 font-bold"}>Currently On-Sale</div>
                <Tags text={"Up to 90%"}/>
            </div>
            <FeedCarousel/>
            <div className={"w-full flex flex-row gap-8 items-center justify-center"}>
                <div className={"text-heading-1 font-bold"}>Currently On-Sale</div>
                <Tags text={"Up to 90%"}/>
            </div>
            <FeedCarousel/>
        </div>
    );
}

export default MainPage;