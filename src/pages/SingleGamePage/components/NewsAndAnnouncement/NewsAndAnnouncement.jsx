import NewsItem from "@/pages/SingleGamePage/components/NewsAndAnnouncement/NewsItem.jsx";

function NewsAndAnnouncement(){
    return (
        <div className={"w-full flex flex-row max-h-screen "}>
            <div className={"h-1/3 w-full"}>
                <NewsItem/>
            </div>
        </div>
    )
}

export default NewsAndAnnouncement;