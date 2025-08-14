import {AiOutlineExport} from "react-icons/ai";
import Tags from "@/components/misc/Tags.jsx";
import {Dialog} from "radix-ui";
import FiltersAdvanced from "@/pages/SearchAndFilter/components/Filter/FiltersAdvanced.jsx";

function FiltersTable() {
    return (
        <div className={"w-full h-fit flex flex-col grow border border-main-accent p-4 text-lg"}>
            <div className={"w-full flex flex-row justify-between my-2"}>
                <div className={"text-heading-2 font-medium"}>Filters</div>
                <Dialog.Root>
                    <Dialog.Trigger>
                        <AiOutlineExport/>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className={"fixed"} />
                        <Dialog.Content className={"fixed left-1/2 top-1/2 -translate-1/2 w-2/3 h-2/3 bg-gradient-to-t to-80% from-background-light to-background z-30 shadow-2xl shadow-background-pop/20 p-8 flex flex-col gap-2 pb-8"}>
                            <div className={"w-full flex flex-row justify-end gap-2"}>
                                <Dialog.Title className={"text-header-1 font-medium mr-auto"}>Filters</Dialog.Title>
                                <Dialog.Close className={"p-2 bg-main-accent shadow shadow-main-accent text-sm"}>
                                    Save & Close
                                </Dialog.Close>
                                <Dialog.Close className={"p-2 bg-secondary-accent-accent shadow shadow-main-accent text-sm"}>
                                    Cancel
                                </Dialog.Close>
                            </div>
                            <hr/>
                            <FiltersAdvanced/>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>

            </div>
            <hr/>

            <div className={"w-full flex flex-col justify-between pb-4 pt-2"}>
                <div className={"w-full flex flex-row justify-between items-center"}>
                    <div className={"text-label"}>Price</div>
                    {/*<AiOutlineExport/>*/}
                </div>
                <div className={"w-full flex flex-row justify-between"}>
                    <input className={"w-2/5 border-b border-background-pop outline-0"} placeholder={"1"}
                           type={"number"}/>
                    <div>
                        To
                    </div>
                    <input className={"w-2/5 border-b border-background-pop outline-0"} placeholder={"100"}
                           type={"number"}/>
                </div>
                <div className={"w-full flex flex-row gap-4 pt-4"}>
                    <label className={"w-fit flex flex-row gap-2"}>
                        <input className={""} type={"checkbox"}/>
                        <div className={"text-label"}>On-sale</div>
                    </label>
                    <label className={"w-fit flex flex-row gap-2"}>
                        <input className={""} type={"checkbox"}/>
                        <div className={"text-label"}>Free</div>
                    </label>
                </div>
            </div>

            <hr/>

            <div className={"w-full flex flex-col justify-between pb-4 pt-2"}>
                <div className={"w-full flex flex-row justify-between items-center"}>
                    <div className={"font-semibold"}>Release Date</div>
                    {/*<AiOutlineExport/>*/}
                </div>
                <div className={"w-full flex flex-row justify-between pt-2"}>
                    <div>From</div>
                    <input className={"w-2/5 border-b border-background-pop outline-0"} placeholder={"dd/mm/yyyy"}
                           type={"date"}/>
                </div>
                <div className={"w-full flex flex-row justify-between"}>
                    <div>To</div>
                    <input className={"w-2/5 border-b border-background-pop outline-0"} placeholder={"dd/mm/yyyy"}
                           type={"date"}/>
                </div>
            </div>

            <hr/>

            <div className={"w-full flex flex-col justify-between pb-4 pt-2"}>
                <div className={"w-full flex flex-row justify-between items-center"}>
                    <div className={"font-semibold"}>Tags</div>
                    {/*<AiOutlineExport/>*/}
                </div>
                <div className={"w-full text-base flex flex-wrap flex-row gap-2 pt-2"}>
                    <Tags text={"Visual Novel"}/>
                    <Tags text={"Action"} variant={"disabled"}/>
                    <Tags text={"3+ more"} variant={"light"}/>
                </div>
            </div>

            <hr/>

            <div className={"w-full flex flex-col justify-between pb-4 pt-2"}>
                <div className={"w-full flex flex-row justify-between items-center"}>
                    <div className={"font-semibold"}>Publisher</div>
                    {/*<AiOutlineExport/>*/}
                </div>
                <div className={"w-full text-base flex flex-wrap flex-row gap-2 pt-2"}>
                    <Tags text={"Project Moon"}/>
                </div>
            </div>

            <hr/>

            <div className={"w-full flex flex-col justify-between pb-4 pt-2"}>
                <div className={"w-full flex flex-row justify-between items-center"}>
                    <div className={"font-semibold"}>Platform</div>
                    {/*<AiOutlineExport/>*/}
                </div>
                <div className={"w-full text-base flex flex-wrap flex-row gap-2 pt-2"}>
                    <Tags text={"Windows"}/>
                    <Tags text={"Mobile"} variant={"disabled"}/>
                    <Tags text={"Console"} variant={"light"}/>
                </div>
            </div>
        </div>
    )
}

export default FiltersTable