import {IoCheckmark, IoClose} from "react-icons/io5";
import {FaSearch} from "react-icons/fa";
import FilterAttributeButton from "@/pages/SearchAndFilter/components/Filter/FilterAttributeButton.jsx";
import FilterListItem from "@/pages/SearchAndFilter/components/Filter/FilterListItem.jsx";

function FiltersAdvanced() {
    return (
        <div className={"w-full grow flex flex-col gap-2 text-base"}>
            <label
                className={"flex flex-row gap-2 group focus-within:border-background-pop hover:border-background-pop border-2 border-background-light p-2 transition-colors duration-300 w-1/2"}>
                <FaSearch size={24}
                          className={"text-background-pop opacity-20 group-focus-within:opacity-100 group-hover:opacity-100 transition-opacity duration-300"}/>
                <input type={"text"} className={"outline-none"} placeholder={"Search a filter"}/>
            </label>

            <div className={"w-full h-full overflow-x-scroll"}>
                <div className={"w-screen h-full grow flex flex-row"}>
                    <div className={"w-1/6 h-full gap-2 flex flex-col gap-2 box-border border border-white p-2"}>
                        <div className={"w-full flex flex-row justify-center gap-2 items-center"}>
                            <div className={"text-heading-2"}>Price</div>
                            <IoClose size={24}/>
                        </div>
                        <div className={"w-full p-2 opacity-0 cursor-default"}>
                            Invisible text that helps
                        </div>
                        <hr className={"pb-2"}/>
                        <div className={"w-full flex flex-row justify-between"}>
                            <div>From</div>
                            <input className={"w-2/5 border-b border-background-pop outline-0"} placeholder={"1"}
                                   type={"number"}/>
                        </div>
                        <div className={"w-full flex flex-row justify-between"}>
                            <div>To</div>
                            <input className={"w-2/5 border-b border-background-pop outline-0"} placeholder={"100"}
                                   type={"number"}/>
                        </div>
                        <label className={"w-fit flex flex-row gap-2"}>
                            <input className={""} type={"checkbox"}/>
                            <div>On-sale</div>
                        </label>
                        <label className={"w-fit flex flex-row gap-2"}>
                            <input className={""} type={"checkbox"}/>
                            <div>Free</div>
                        </label>
                    </div>

                    <div className={"w-1/6 h-full gap-2 flex flex-col gap-2 box-border border border-white p-2"}>
                        <div className={"w-full flex flex-row justify-center gap-2 items-center"}>
                            <div className={"text-heading-2"}>Release</div>
                            <IoClose size={24}/>
                        </div>
                        <div className={"w-full p-2 opacity-0 cursor-default"}>
                            Invisible text that helps
                        </div>
                        <hr className={"pb-2"}/>
                        <div className={"w-full flex flex-row justify-between"}>
                            <div>From</div>
                            <input className={"w-3/5 border-b border-background-pop outline-0"} placeholder={"1"}
                                   type={"date"}/>
                        </div>
                        <div className={"w-full flex flex-row justify-between"}>
                            <div>To</div>
                            <input className={"w-3/5 border-b border-background-pop outline-0"} placeholder={"100"}
                                   type={"date"}/>
                        </div>
                    </div>

                    <div className={"w-1/6 h-full gap-2 flex flex-col gap-2 box-border border border-white p-2"}>
                        <div className={"w-full flex flex-row justify-center gap-2 items-center"}>
                            <div className={"text-heading-2"}>Tags</div>
                            <IoClose size={24}/>
                        </div>
                        <div className={"w-full flex flex-row justify-around"}>
                            <div className={"w-1/4 aspect-2/1"}>
                                <FilterAttributeButton count={12} type={"whitelist"}/>
                            </div>
                            <div className={"w-1/4 aspect-2/1"}>
                                <FilterAttributeButton count={12} type={"blacklist"}/>
                            </div>
                        </div>
                        <hr className={"mt-1 pb-2"}/>

                        <label
                            className={"flex flex-row gap-2 group focus-within:border-background-pop hover:border-background-pop border-2 border-background-light p-2 transition-colors duration-300 w-full"}>
                            <input type={"text"} className={"outline-none"} placeholder={"Search a tag"}/>
                        </label>

                        <div className={"w-full h-[300px] flex flex-col gap-2 p-2 overflow-y-scroll"}>
                            {
                                new Array(11).fill("").map(() => (
                                    <FilterListItem/>
                                ))
                            }
                        </div>
                    </div>

                    <div className={"w-1/6 h-full gap-2 flex flex-col gap-2 box-border border border-white p-2"}>
                        <div className={"w-full flex flex-row justify-center gap-2 items-center"}>
                            <div className={"text-heading-2"}>Genre</div>
                            <IoClose size={24}/>
                        </div>
                        <div className={"w-full flex flex-row justify-around"}>
                            <div className={"w-1/4 aspect-2/1"}>
                                <FilterAttributeButton count={12} type={"whitelist"}/>
                            </div>
                            <div className={"w-1/4 aspect-2/1"}>
                                <FilterAttributeButton count={12} type={"blacklist"}/>
                            </div>
                        </div>
                        <hr className={"mt-1 pb-2"}/>

                        <label
                            className={"flex flex-row gap-2 group focus-within:border-background-pop hover:border-background-pop border-2 border-background-light p-2 transition-colors duration-300 w-full"}>
                            <input type={"text"} className={"outline-none"} placeholder={"Search a tag"}/>
                        </label>

                        <div className={"w-full h-[300px] flex flex-col gap-2 p-2 overflow-y-scroll"}>
                            {
                                new Array(11).fill("").map(() => (
                                    <FilterListItem/>
                                ))
                            }
                        </div>
                    </div>

                    <div className={"w-1/6 h-full gap-2 flex flex-col gap-2 box-border border border-white p-2"}>
                        <div className={"w-full flex flex-row justify-center gap-2 items-center"}>
                            <div className={"text-heading-2"}>Publishers</div>
                            <IoClose size={24}/>
                        </div>
                        <div className={"w-full flex flex-row justify-around"}>
                            <div className={"w-1/4 aspect-2/1"}>
                                <FilterAttributeButton count={12} type={"whitelist"}/>
                            </div>
                            <div className={"w-1/4 aspect-2/1"}>
                                <FilterAttributeButton count={12} type={"blacklist"}/>
                            </div>
                        </div>
                        <hr className={"mt-1 pb-2"}/>

                        <label
                            className={"flex flex-row gap-2 group focus-within:border-background-pop hover:border-background-pop border-2 border-background-light p-2 transition-colors duration-300 w-full"}>
                            <input type={"text"} className={"outline-none"} placeholder={"Search a tag"}/>
                        </label>

                        <div className={"w-full h-[300px] flex flex-col gap-2 p-2 overflow-y-scroll"}>
                            {
                                new Array(11).fill("").map(() => (
                                    <FilterListItem/>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FiltersAdvanced;