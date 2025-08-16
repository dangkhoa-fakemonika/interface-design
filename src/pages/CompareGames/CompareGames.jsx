import GameSlot from "@/pages/CompareGames/components/GameSlot.jsx";
import RatingStars from "@/components/misc/RatingStars.jsx";
import PerformanceOptions from "@/pages/SingleGamePage/components/Performance/PerformanceOptions.jsx";
import {FaChartBar, FaChartLine} from "react-icons/fa";
import ChartSpan from "@/pages/SingleGamePage/components/Performance/ChartSpan.jsx";
import {
    Bar, CartesianGrid, Legend, Line, LineChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis
} from "recharts";
import {useState} from "react";

function CompareGames() {
    const [chartType, setChartType] = useState(false);

    const data = [{
        value1: 4250, value2: 4900, name: "Jan 2023"
    }, {
        value1: 5120, value2: 3800, name: "Feb 2023"
    }, {
        value1: 3890, value2: 4550, name: "Mar 2023"
    }, {
        value1: 6500, value2: 5800, name: "Apr 2023"
    }, {
        value1: 7850, value2: 8500, name: "May 2023"
    }, {
        value1: 9100, value2: 7500, name: "Jun 2023"
    }, {
        value1: 4500, value2: 5200, name: "Jul 2023"
    }, {
        value1: 5800, value2: 6500, name: "Aug 2023"
    }, {
        value1: 4900, value2: 4200, name: "Sep 2023"
    }, {
        value1: 6100, value2: 6900, name: "Oct 2023"
    }, {
        value1: 7200, value2: 6500, name: "Nov 2023"
    }, {
        value1: 8500, value2: 9200, name: "Dec 2023"
    }, {
        value1: 4700, value2: 5400, name: "Jan 2024"
    }, {
        value1: 5900, value2: 5200, name: "Feb 2024"
    }, {
        value1: 4100, value2: 4800, name: "Mar 2024"
    }, {
        value1: 6800, value2: 6100, name: "Apr 2024"
    }, {
        value1: 8200, value2: 8900, name: "May 2024"
    }, {
        value1: 9500, value2: 8700, name: "Jun 2024"
    }, {
        value1: 4800, value2: 5500, name: "Jul 2024"
    }, {
        value1: 6300, value2: 5600, name: "Aug 2024"
    }, {
        value1: 5500, value2: 6200, name: "Sep 2024"
    }, {
        value1: 7000, value2: 7800, name: "Oct 2024"
    }, {
        value1: 8800, value2: 8100, name: "Nov 2024"
    }, {
        value1: 9800, value2: 8900, name: "Dec 2024"
    }, {
        value1: 5000, value2: 5700, name: "Jan 2025"
    }, {
        value1: 6500, value2: 7200, name: "Feb 2025"
    }, {
        value1: 4300, value2: 5000, name: "Mar 2025"
    }, {
        value1: 7100, value2: 6400, name: "Apr 2025"
    }, {
        value1: 8500, value2: 9200, name: "May 2025"
    }, {
        value1: 9900, value2: 9100, name: "Jun 2025"
    }, {
        value1: 5200, value2: 5900, name: "Jul 2025"
    }, {
        value1: 6700, value2: 7400, name: "Aug 2025"
    }]

    return (
        <div className={"w-full p-8 flex flex-col gap-8 overflow-y-scroll"}>
            <div className={"w-full flex flex-row h-fit justify-between"}>

                <div
                    className={"flex flex-col h-full gap-2 justify-end items-center text-heading-2 font-medium text-contrast-background-alt dark:text-text"}>
                    <div className={"mb-auto w-full text-heading-1 "}>Game Comparison</div>
                    <hr className={"w-full dark:text-text text-contrast-background-alt"}/>
                    <div
                        className={"w-full p-1 text-start"}>Current
                        Ratings
                    </div>
                    <div
                        className={"w-full p-1 text-start"}>Current
                        Total Revenue
                    </div>
                    <div
                        className={"w-full p-1 text-start"}>Current
                        Total Downloads
                    </div>
                </div>

                <div className={"w-2/5 h-fit flex flex-col gap-4 text-contrast-background-alt dark:text-text"}>
                    <GameSlot/>
                    <hr className={"w-full dark:text-text text-contrast-background-alt"}/>
                    <div className={"w-full flex flex-row justify-end items-center gap-4 text-heading-2"}>
                        {/*<div className={"mr-auto"}>Current Ratings</div>*/}
                        <div className={"opacity-20"}>4.5</div>
                        <RatingStars ratings={4.5} size={24}/>
                    </div>
                    <div className={"w-full flex flex-row justify-end items-center gap-4 text-heading-2"}>
                        {/*<div className={"mr-auto"}>Current Total Revenue</div>*/}
                        <div>8,000,000</div>
                    </div>
                    <div className={"w-full flex flex-row justify-end items-center gap-4 text-heading-2"}>
                        {/*<div className={"mr-auto"}>Current Total Downloads</div>*/}
                        <div>800,000</div>
                    </div>
                </div>


                <div className={"w-2/5 h-fit flex flex-col gap-4 text-contrast-background-alt dark:text-text"}>
                    <GameSlot/>
                    <hr className={"w-full dark:text-text text-contrast-background-alt"}/>
                    <div className={"w-full flex flex-row justify-end items-center gap-4 text-heading-2"}>
                        {/*<div className={"mr-auto"}>Current Ratings</div>*/}
                        <div className={"opacity-20"}>3.6</div>
                        <RatingStars ratings={3.6} size={24}/>
                    </div>
                    <div className={"w-full flex flex-row justify-end items-center gap-4 text-heading-2"}>
                        {/*<div className={"mr-auto"}>Current Total Revenue</div>*/}
                        <div>10,000,000</div>
                    </div>
                    <div className={"w-full flex flex-row justify-end items-center gap-4 text-heading-2"}>
                        {/*<div className={"mr-auto"}>Current Total Downloads</div>*/}
                        <div>500,000</div>
                    </div>
                </div>
            </div>

            <hr className={"w-full dark:text-text text-contrast-background-alt"}/>

            <div className={"w-full h-full flex flex-row gap-2"}>
                <div className={"h-2/3 flex-1 flex flex-col w-1/2 gap-4 items-center"}>
                    <div className={"w-full flex flex-row justify-around"}>
                        <button type={"button"}
                                className={"bg-background-pop py-2 px-4 hover:bg-main-accent transition-colors duration-300"}>
                            Export chart data
                        </button>
                    </div>
                    <PerformanceOptions/>
                    <div className={"w-full flex flex-row"}>
                        <button type={"button"}
                                className={"group flex-1 justify-center flex-row gap-2 p-2 flex transition-colors duration-300 " + (chartType === false ? "bg-background-pop" : "bg-background-pop/20 hover:bg-background-pop/40")}
                                onClick={() => setChartType(false)}>
                            <div className={"group-hover:block hidden"}>Line Chart</div>
                            <FaChartLine size={24}/>
                        </button>
                        <button type={"button"}
                                className={"group flex-1 justify-center flex-row gap-2 p-2 flex transition-colors duration-300 " + (chartType === true ? "bg-background-pop" : "bg-background-pop/20 hover:bg-background-pop/40")}
                                onClick={() => setChartType(true)}>
                            <div className={"group-hover:block hidden"}>Bar Chart</div>
                            <FaChartBar size={24}/>
                        </button>
                    </div>
                </div>
                <div className={"h-full flex-2 flex flex-col gap-4"}>
                    <div className={"w-full flex flex-row justify-between"}>
                        <div className={"text-heading-1 font-semibold text-contrast-background-alt dark:text-text"}>Revenue</div>
                        <ChartSpan/>
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 0, right: 0, left: 0, bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="10 10"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            {!chartType ?

                                <>
                                    <Line type="monotone" dataKey="value1" stroke="var(--color-main-accent)"
                                          activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="value2" stroke="var(--color-secondary-accent)"
                                          activeDot={{r: 8}}/>
                                </>

                                : <>
                                    <Bar type="monotone" dataKey="value1" fill="var(--color-main-accent)"
                                         activeBar={<Rectangle fill="var(--color-background-light)"
                                                               stroke="var(--color-main-accent)"/>}/>
                                    <Bar type="monotone" dataKey="value2" fill="var(--color-secondary-accent)"
                                         activeBar={<Rectangle fill="var(--color-background-light)"
                                                               stroke="var(--color-secondary-accent)"/>}/>
                                </>}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>)
}

export default CompareGames;