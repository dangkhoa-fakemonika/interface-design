import Tags from "@/components/misc/Tags.jsx";

function SearchEntry(){
    return (
        <div className={"group w-full flex flex-row bg-background-light cursor-pointer hover:bg-background-pop duration-300 transition-colors p-2"}>
            <img
                src={"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973530/header.jpg?t=1747619569"}
                alt={"something"}
                className={"w-1/3 aspect-video object-cover"}
            />
            <div className={"w-full flex flex-col gap-2 justify-between p-4"}>
                <div className={"text-heading-2 font-medium"}>Limbus Company</div>
                <div className={"text-heading-3 text-main-accent group-hover:text-black duration-300 transition-colors"}>Free to Play</div>
                <div className={"w-full flex flex-row flex-wrap"}>
                    <Tags text={"Visual Novel"}/>
                </div>
            </div>
        </div>
    )
}

export default SearchEntry