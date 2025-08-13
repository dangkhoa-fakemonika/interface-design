function GameSlot(){
    return (
        <div className={"group w-full h-full flex flex-row bg-gradient-to-t from-background-pop/20 to-background-pop/60 p-4 gap-4"}>
            <img
                src={"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973530/header.jpg?t=1747619569"}
                alt={"something"}
                className={"w-1/4 aspect-2/3 object-cover object-[7%_50%]"}
            />
            <div className={"relative w-full grow overflow-hidden flex flex-col"}>
                <div className={"text-2xl"}>Limbus Company</div>
                <div className={"opacity-60 italic text-xl"}>Project Moon</div>

                <button type={"button"} className={"absolute -bottom-20 group-hover:bottom-0 w-full bg-gradient-to-b from-background-contrast/60 to-background-contrast/40 p-2 transition-all duration-150 "}>
                    Select another game
                </button>
            </div>

        </div>
    )
}

export default GameSlot;