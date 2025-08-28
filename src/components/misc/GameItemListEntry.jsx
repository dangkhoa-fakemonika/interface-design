import RatingStars from "@/components/misc/RatingStars.jsx";
import {FaUserPlus} from "react-icons/fa6";
import {MdInsights} from "react-icons/md";
import {useNavigate} from "react-router";

function GameItemListEntry(props){
    const {num} = props;
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate("/game-page")}
            className={"w-full flex flex-row max-h-1/6 min-h-[160px] dark:bg-background-light bg-background-light-alt p-4 gap-4"}>
            <img
                src={"/games/" + num + ".jpg"}
                alt={"something"}
                className={"h-full object-cover"}
            />
            <div className={"w-full flex flex-col "}>
                <div className={"w-full h-fit flex flex-row gap-2 items-center"}>
                    <div className={"text-heading-2"}>Limbus Company</div>
                    <RatingStars ratings={4.5} size={20}/>
                    <div className={"dark:text-main-accent text-main-accent-alt ml-auto"}>Free to play</div>
                </div>

                <div className={"dark:opacity-60 text-extra-alt dark:text-background-contrast"}>Lorem Ispum</div>

                <div className={"w-full flex flex-row justify-start gap-4 dark:text-background-contrast text-contrast-background-alt mt-auto"}>
                    <div className={"w-fit flex flex-row gap-2 text-center items-center"}>
                        <FaUserPlus/>
                        <div>
                            1699 last month
                        </div>
                    </div>
                    <div className={"w-fit flex flex-row gap-2 text-center items-center"}>
                        <MdInsights/>
                        <div>
                            1240 last month
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameItemListEntry