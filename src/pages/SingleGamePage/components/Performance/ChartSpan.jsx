import {Select} from "radix-ui";
import {useState} from "react";

function ChartSpan(){
    const [chartType, setChartType] = useState("Monthly");

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const years = [
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
        "2025"
    ];

    return (
        <div className={"w-fit flex flex-row gap-2"}>
            <div className={"w-fit flex flex-row gap-2 items-center"}>
                <div>From</div>

                {
                    chartType === "Monthly" ?
                    <Select.Root>
                        <Select.Trigger className={"gap-4 flex flex-row border border-background-pop p-2"}>
                            <Select.Value defaultValue={"Jul"} className={"text-white"} placeholder={"Jul"}/>
                            <Select.Icon/>
                        </Select.Trigger>

                        <Select.Portal>
                            <Select.Content className={"w-full p-2 bg-background border border-background-pop"}>
                                <Select.Viewport className={"flex flex-col gap-2"}>
                                    {
                                        months.map((m) => (
                                            <Select.Item value={m}>
                                                <Select.ItemText>{m}</Select.ItemText>
                                                <Select.ItemIndicator/>
                                            </Select.Item>
                                        ))
                                    }
                                </Select.Viewport>
                            </Select.Content>
                        </Select.Portal>
                    </Select.Root> : <div/>
                }

                <Select.Root>
                    <Select.Trigger className={"gap-4 flex flex-row border border-background-pop p-2"}>
                        <Select.Value defaultValue={"2024"} className={"text-white"} placeholder={"2024"}/>
                        <Select.Icon/>
                    </Select.Trigger>

                    <Select.Portal>
                        <Select.Content className={"w-full p-2 bg-background border border-background-pop"}>
                            <Select.Viewport className={"flex flex-col gap-2"}>
                                {
                                    years.map((m) => (
                                        <Select.Item value={m}>
                                            <Select.ItemText>{m}</Select.ItemText>
                                            <Select.ItemIndicator/>
                                        </Select.Item>
                                    ))
                                }
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>

                <div>To</div>
                {
                    chartType === "Monthly" ?
                    <Select.Root>
                        <Select.Trigger className={"gap-4 flex flex-row border border-background-pop p-2"}>
                            <Select.Value defaultValue={"Feb"} className={"text-white"} placeholder={"Feb"}/>
                            <Select.Icon/>
                        </Select.Trigger>

                        <Select.Portal>
                            <Select.Content className={"w-full p-2 bg-background border border-background-pop"}>
                                <Select.Viewport className={"flex flex-col gap-2"}>
                                    {
                                        months.map((m) => (
                                            <Select.Item value={m}>
                                                <Select.ItemText>{m}</Select.ItemText>
                                                <Select.ItemIndicator/>
                                            </Select.Item>
                                        ))
                                    }
                                </Select.Viewport>
                            </Select.Content>
                        </Select.Portal>
                    </Select.Root> : <div/>
                }

                <Select.Root>
                    <Select.Trigger className={"gap-4 flex flex-row border border-background-pop p-2"}>
                        <Select.Value defaultValue={"2025"} className={"text-white"} placeholder={"2025"}/>
                        <Select.Icon/>
                    </Select.Trigger>

                    <Select.Portal>
                        <Select.Content className={"w-full p-2 bg-background border border-background-pop"}>
                            <Select.Viewport className={"flex flex-col gap-2"}>
                                {
                                    years.map((m) => (
                                        <Select.Item value={m}>
                                            <Select.ItemText>{m}</Select.ItemText>
                                            <Select.ItemIndicator/>
                                        </Select.Item>
                                    ))
                                }
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
            </div>

            <Select.Root value={chartType} onValueChange={(value) => setChartType(value)}>
                <Select.Trigger className={"gap-4 flex flex-row border border-background-pop p-2"}>
                    <Select.Value defaultValue={"Monthly"} className={"text-white"} placeholder={"Monthly"}/>
                    <Select.Icon/>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Content className={"w-full p-2 bg-background border border-background-pop"}>
                        <Select.Viewport>
                            <Select.Item value={"Monthly"}>
                                <Select.ItemText>
                                    Monthly
                                </Select.ItemText>
                                <Select.ItemIndicator/>
                            </Select.Item>

                            <Select.Item value={"Annually"} className={"pt-2"}>
                                <Select.ItemText>
                                    Annually
                                </Select.ItemText>
                                <Select.ItemIndicator/>
                            </Select.Item>
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    )
}

export default ChartSpan;