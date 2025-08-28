import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Bar,
    Rectangle
} from 'recharts';
import PerformanceOptions from "@/pages/SingleGamePage/components/Performance/PerformanceOptions.jsx";
import ChartSpan from "@/pages/SingleGamePage/components/Performance/ChartSpan.jsx";
import {useState} from "react";
import {FaChartBar, FaChartLine} from "react-icons/fa";
import {useNavigate} from "react-router";

function Performance() {
    const [chartType, setChartType] = useState(false);
    const navigate = useNavigate();

    const data = [
        {
            value: 4250,
            name: "Jul 2024"
        },
        {
            value: 5120,
            name: "Aug 2024"
        },
        {
            value: 3890,
            name: "Sep 2024"
        },
        {
            value: 6500,
            name: "Oct 2024"
        },
        {
            value: 7850,
            name: "Nov 2024"
        },
        {
            value: 9100,
            name: "Dec 2024"
        },
        {
            value: 4500,
            name: "Jan 2025"
        },
        {
            value: 5800,
            name: "Feb 2025"
        }
    ];

    return (
        <div className={"w-full h-full flex flex-row gap-2"}>
            <div className={"h-2/3 flex-1 flex flex-col w-1/2 gap-4 items-center"}>
                <div className={"w-full flex flex-row justify-around"}>
                    <button type={"button"}
                            className={"bg-background-pop py-2 px-4 hover:bg-main-accent transition-colors duration-300"}
                            onClick={() => navigate("/compare-games")}>
                        Compare with another game
                    </button>
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
            <div className={"h-2/3 flex-2 flex flex-col gap-4"}>
                <div className={"w-full flex flex-row justify-between"}>
                    <div className={"text-2xl font-semibold"}>Revenue</div>
                    <ChartSpan/>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="10 10"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip content={
                            ({active, payload, label}) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="custom-tooltip bg-background flex flex-col gap-2 p-2 border border-white">
                                            <div className="label text-main-accent">{`${label}`}</div>
                                            <div className="intro text-background-contrast">{`Value : ${payload[0].value}`}</div>
                                        </div>
                                    );
                                }

                                return null;
                            }
                        } />
                        <Legend formatter={
                            (value, entry) => {
                                // `entry` contains the color and data of the legend item
                                const { color } = entry;
                                return <span style={{ color }}>Limbus Company</span>;
                            }
                        }/>
                            {
                                !chartType ?
                                    <Line type="monotone" dataKey="value" stroke="var(--color-background-contrast)"
                                          activeDot={{r: 8}}/> :
                                    <Bar type="monotone" dataKey="value" fill="var(--color-background-pop)"
                                         activeBar={<Rectangle fill="var(--color-background-light)"
                                                               stroke="var(--color-background-contrast)"/>}/>
                            }
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Performance;