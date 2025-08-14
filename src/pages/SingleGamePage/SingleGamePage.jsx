import FavoriteButton from "@/pages/SingleGamePage/components/FavoriteButton.jsx";
import RatingStars from "@/components/misc/RatingStars.jsx";
import Tags from "@/components/misc/Tags.jsx";
import SteamButton from "@/components/misc/SteamButton.jsx";
import { Tabs } from "radix-ui";
import GeneralInformation from "@/pages/SingleGamePage/components/GeneralInformation/GeneralInformation.jsx";
import NewsAndAnnouncement from "@/pages/SingleGamePage/components/NewsAndAnnouncement/NewsAndAnnouncement.jsx";
import Performance from "@/pages/SingleGamePage/components/Performance/Performance.jsx";

function SingleGamePage(){
    return (
        <div className={"flex flex-col w-full overflow-y-scroll"}>
            <div className={"relative w-full h-2/3"}>
                <img
                    src={"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973530/header.jpg?t=1747619569"}
                    alt={"something"}
                    className={"w-full h-full absolute object-cover opacity-20"}
                />
                <div className={"relative w-full flex flex-row justify-between p-8 gap-8"}>
                    <div className={"w-1/2 flex flex-col "}>
                        <img
                            src={"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973530/header.jpg?t=1747619569"}
                            alt={"something"}
                            className={"w-full object-cover"}
                        />
                    </div>
                    <div className={"w-1/2 flex flex-col gap-2"}>
                        <div className={"w-full flex flex-row justify-between"}>
                            <div className={"text-heading-1"}>Limbus Company</div>
                            <FavoriteButton/>
                        </div>
                        <div className={"w-full flex flex-row justify-between"}>
                            <div className={"text-heading-2"}>By ProjectMoon</div>
                            <div className={"text-heading-2 text-main-accent"}>Free to play</div>
                        </div>
                        <div className={"flex flex-row gap-4 items-center"}>
                            <RatingStars ratings={4.5} size={24}/>
                            <div className={"text-heading-2"}>Very Positive</div>
                        </div>

                        <div className={"w-full flex flex-row gap-2 mt-auto"}>
                            <Tags text={"Visual Novel"}/>
                            <Tags text={"Turn-based"}/>
                        </div>

                        <div className={"mt-auto h-1/8"}>
                            <SteamButton/>
                        </div>
                    </div>
                </div>
            </div>

            <Tabs.Root defaultValue={"tab-1"} className={"min-h-screen"}>
                <Tabs.List className={"w-full"}>
                    <Tabs.Trigger className={"w-1/3 p-4 text-heading-3 text-secondary-accent data-[state=active]:text-main-accent hover:bg-gradient-to-t hover:from-background-pop/10 data-[state=active]:bg-gradient-to-t data-[state=active]:!from-background-pop/40 to-white/0 transition-all duration-300"} value={"tab-1"}>
                        Tab 1
                    </Tabs.Trigger>
                    <Tabs.Trigger className={"w-1/3 p-4 text-heading-3 text-secondary-accent data-[state=active]:text-main-accent hover:bg-gradient-to-t hover:from-background-pop/10 data-[state=active]:bg-gradient-to-t data-[state=active]:!from-background-pop/40 to-white/0 transition-all duration-300"} value={"tab-2"}>
                        Tab 2
                    </Tabs.Trigger>
                    <Tabs.Trigger className={"w-1/3 p-4 text-heading-3 text-secondary-accent data-[state=active]:text-main-accent hover:bg-gradient-to-t hover:from-background-pop/10 data-[state=active]:bg-gradient-to-t data-[state=active]:!from-background-pop/40 to-white/0 transition-all duration-300"} value={"tab-3"}>
                        Tab 3
                    </Tabs.Trigger>

                </Tabs.List>
                <Tabs.Content value={"tab-1"} className={"w-full p-8"}>
                    <GeneralInformation/>
                </Tabs.Content>

                <Tabs.Content value={"tab-2"} className={"w-full p-8"}>
                    <NewsAndAnnouncement/>
                </Tabs.Content>
                <Tabs.Content value={"tab-3"} className={"w-full p-8 h-full"}>
                    <Performance/>
                </Tabs.Content>
            </Tabs.Root>

        </div>
    )
}

export default SingleGamePage