function SteamButton(){
    return (
        <button className={"w-full h-full flex flex-row justify-center bg-gradient-to-r from-background-pop to-background-contrast box-border"} onClick={() => {}}>
            <div className={"w-fit h-full flex flex-row items-center ml-8"}>
                <div className={"text-xl"}>
                    View on
                </div>
                <img
                    src={"/steam_2.svg"}
                    alt={"stem"}
                    className={"w-fit h-full object-contain scale-60 -ml-8"}
                />
            </div>
        </button>
    )
}

export default SteamButton;