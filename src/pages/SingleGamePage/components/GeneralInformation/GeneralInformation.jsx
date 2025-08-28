import {FaAndroid, FaApple, FaWindows} from "react-icons/fa";

function GeneralInformation(){
    return (
        <div className={"w-full flex flex-col gap-4"}>
            <div className={"w-full flex flex-col gap-2"}>
                <div className={"font-medium text-heading-1"}>Details</div>
                <div className={"text-heading-2"}>Release Date : 26 February 2023</div>
                <div className={"text-heading-2 flex flex-row items-center gap-2"}>Playable On <FaWindows/> <FaAndroid/> <FaApple/></div>
            </div>

            <div className={"w-full flex flex-col gap-2"}>
                <div className={"font-medium text-heading-1"}>Introduction</div>
                <div className={"text-heading-2"}>As the Executive Manager of Limbus Company, lead your group of twelve
                    Sinners, venture into the buried facilities of Lobotomy Corporation, and lay claim on the Golden
                    Boughs.
                </div>
            </div>

            <div className={"w-full flex flex-col gap-2"}>
                <div className={"font-medium text-heading-1"}>Gameplay</div>
                <div className={"text-heading-2"}>- Each turn results in a display of exhilarating action.</div>
                <div className={"text-heading-2"}>- In the combat phase, units on both sides will act simultaneously.
                </div>
                <div className={"text-heading-2"}>- A Combination of Turn-based RPG and Realtime Brawl</div>
                <div className={"text-heading-2"}>- During the scramble, characters targeting each other may Clash.
                </div>
                <div className={"text-heading-2"}>- The outcome of a Clash depends on the strength of their opposing
                    skills and a sprinkle of luck; the winner can shut down the loser's skill.
                </div>
                <div className={"text-heading-2"}>- Ensure you use the right skills to win Clashes.</div>
            </div>

            <div className={"w-full flex flex-col gap-2"}>
                <div className={"font-medium text-heading-1"}>Screenshots</div>
                <div className={"h-[200px] flex flex-row gap-2"}>
                    <img
                        src={"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973530/ss_1ae814b7c6485f3096d351e775137a7bca39a6c7.600x338.jpg?t=1747619569"}
                        alt={"1"}
                        className={"h-full"}
                    />
                    <img
                        src={"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973530/ss_c14bbf4d204aab3372dfb89b1101556dde999ac1.600x338.jpg?t=1747619569"}
                        alt={"2"}
                        className={"h-full"}
                    />
                </div>
            </div>

        </div>
    )
}

export default GeneralInformation;