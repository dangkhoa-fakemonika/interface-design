function SearchTooltips(){
    return (
        <div className={"w-full flex flex-row justify-around px-8 text-3xl"}>
            <div className={"w-1/3 p-4 flex flex-col gap-2"}>
                <div className={"pb-2 text-heading-1 dark:text-text text-contrast-background-alt"}>How to use</div>
                <div className={"text-label dark:text-text text-text-alt"}>- Search for game name</div>
                <div className={"text-label dark:text-text text-text-alt"}>- Click on items to go to game details page</div>
                <div className={"text-label dark:text-text text-text-alt"}>- Use Arrow keys to select items and Enter to go to game details page</div>
                <div className={"text-label dark:text-text text-text-alt"}>- Hit Esc to close search view</div>
                <div className={"text-label dark:text-text text-text-alt"}>- Ctrl + Enter to view all results</div>
            </div>
            <div className={"w-1/3 p-4 flex flex-col gap-2"}>
                <div className={"pb-2 text-heading-1 dark:text-text text-contrast-background-alt "}>Advanced usage</div>
                <div className={"text-label dark:text-text text-text-alt"}>- Add quick filters to search:</div>
                <div className={"text-label dark:text-text text-text-alt ps-4"}>+ tag:tag-name to quick filter by a tag</div>
                <div className={"text-label dark:text-text text-text-alt ps-4"}>+ pub:publisher-name to quick filter by a publisher</div>
                <div className={"text-label dark:text-text text-text-alt ps-4"}>+ from:yyyy/mm/dd to filter game titles after a timeline</div>
                <div className={"text-label dark:text-text text-text-alt ps-4"}>+ to:yyyy/mm/dd to filter game titles before a timeline</div>
                <div className={"text-label dark:text-text text-text-alt"}>- Type @ai before typing a prompt and Enter to quickly access into AI Chatbot</div>
            </div>
        </div>
    )
}

export default SearchTooltips