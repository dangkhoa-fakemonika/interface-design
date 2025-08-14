function SearchTooltips(){
    return (
        <div className={"w-full flex flex-row justify-around px-8 text-3xl"}>
            <div className={"w-1/3 p-4"}>
                <div className={"pb-2 text-heading-1"}>How to use</div>
                <div className={"text-label"}>Google it, lol</div>
            </div>
            <div className={"w-1/3 p-4"}>
                <div className={"pb-2 text-heading-1"}>Advanced usage</div>
                <div className={"text-label"}>We don't really have one</div>
            </div>
        </div>
    )
}

export default SearchTooltips