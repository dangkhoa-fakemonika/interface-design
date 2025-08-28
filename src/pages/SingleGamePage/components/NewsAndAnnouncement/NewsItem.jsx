import {TbEyeCheck} from "react-icons/tb";

function NewsItem(props){
    const {date = "Friday, July 28", content = "New Among Us Collab"} = props;

    return (
        <div className={"w-full h-full p-4 flex flex-row gap-4 bg-background-light border border-background-light hover:border-background-contrast transition-colors duration-300"}>
            <img
                src={"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973530/header.jpg?t=1747619569"}
                alt={"something"}
                className={"h-full"}
            />
            <div className={"w-full flex flex-col gap-2"}>
                <div className={"text-big-title font-medium"}>{content}</div>
                <div className={"text-main-accent text-small-title font-medium"}>{date}</div>
                <div className={"opacity-20 mt-auto justify-end gap-2 w-full flex flew-row items-center"}>
                    <TbEyeCheck size={24} />
                    <div>129</div>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;