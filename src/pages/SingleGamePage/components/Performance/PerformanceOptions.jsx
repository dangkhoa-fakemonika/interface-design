import {FaChevronRight, FaDownload, FaGamepad, FaHeart, FaStar} from "react-icons/fa";
import {useState} from "react";
import {FaMoneyBillTrendUp} from "react-icons/fa6";

function PerformanceOptions() {
    const [selected, setSelected] = useState(1);
    const options = [
        "Revenue",
        "Active Players",
        "Downloads",
        "Ratings",
        "Following"
    ]

    const icons = [
        <FaMoneyBillTrendUp/>,
        <FaGamepad/>,
        <FaDownload/>,
        <FaStar/>,
        <FaHeart/>
    ]

    return (
        <div className={"w-full flex flex-col"}>
            {
                Array.from({length: 5}, (_, i) => i + 1).map((i) => (
                    <div
                        onClick={() => setSelected(i)}
                        className={"group w-full h-full flex flex-row p-4 gap-4 items-center justify-start dark:bg-gradient-to-l transition-all duration-300 border-y dark:border-none dark:bg-background " + (selected === i ? " dark:from-background-light/50 dark:to-background-pop/50 dark:text-main-accent bg-background-light-alt text-text-alt border-background-light-alt " : " dark:from-background-light/20 dark:to-background-pop/20 dark:hover:text-secondary-accent dark:hover:bg-background text-background-light-alt bg-contrast-background-alt hover:bg-background-pop-alt hover:text-contrast-background-alt border-background-pop-alt")}>
                        <div className={"text-normal-text"}>{options[i - 1]}</div>
                        {icons[i - 1]}
                        <FaChevronRight
                            className={"ml-auto " + (selected === i ? " opacity-100" : " opacity-0 group-hover:opacity-40")}/>
                    </div>
                ))
            }
        </div>
    )
}

export default PerformanceOptions
