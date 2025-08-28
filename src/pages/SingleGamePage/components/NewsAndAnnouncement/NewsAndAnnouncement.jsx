import NewsItem from "@/pages/SingleGamePage/components/NewsAndAnnouncement/NewsItem.jsx";

function NewsAndAnnouncement(){
    return (
        <div className={"w-full flex flex-col max-h-screen"}>
            <div className={"h-1/3 w-full"}>
                <NewsItem date={"Friday, July 28"} content={"New Among Us Collab"}/>
            </div>
            <div className={"h-1/3 w-full"}>
                <NewsItem date={"Thursday, July 24"}
                          content={"New Identity 'The One Who Grips' has been added to the game."}/>
            </div>
            <div className={"h-1/3 w-full"}>
                <NewsItem date={"Wednesday, July 23"}
                          content={"Server maintenance completed. Compensation has been sent to the mailboxes."}/>
            </div>
            <div className={"h-1/3 w-full"}>
                <NewsItem date={"Monday, July 21"}
                          content={"Mirror Dungeon 3 has been updated with new enemies and rewards."}/>
            </div>
            <div className={"h-1/3 w-full"}>
                <NewsItem date={"Friday, July 18"}
                          content={"Don't miss the current event 'The Hell's Chicken'. Ends on July 31st."}/>
            </div>


        </div>
    )
}

export default NewsAndAnnouncement;