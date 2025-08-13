import {FaChevronRight, FaDownload, FaGamepad, FaHeart, FaStar} from "react-icons/fa";
import {useState} from "react";
import {FaMoneyBillTrendUp} from "react-icons/fa6";

function PerformanceOptions(){
    const [selected, setSelected] = useState(1);
    const options = [
        "Revenue",
        "Active Players",
        "Downloads",
        "Ratings",
        "Following"
    ]

    const icons = [
        <FaMoneyBillTrendUp />,
        <FaGamepad />,
        <FaDownload />,
        <FaStar />,
        <FaHeart />
    ]

    return (
        <div className={"w-full flex flex-col"}>
            {
                Array.from({length: 5}, (_, i) => i + 1).map((i) => (
                    <div
                        onClick={() => setSelected(i)}
                        className={"group w-full h-full flex flex-row p-4 gap-4 items-center justify-start items-center bg-gradient-to-l transition-all duration-300 " + (selected === i ? " from-background-light/50 to-background-pop/50 text-main-accent " : " from-background-light/20 to-background-pop/20 hover:text-secondary-accent hover:from-background-light/30 hover:to-background-pop/30") }>
                        <div>{options[i - 1]}</div>
                        {icons[i - 1]}
                        <FaChevronRight className={"ml-auto " + (selected === i ? " opacity-100" : " opacity-0 group-hover:opacity-40")}/>
                    </div>
                ))
            }
        </div>
    )
}

export default PerformanceOptions
