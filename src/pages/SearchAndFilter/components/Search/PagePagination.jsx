import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

function PagePagination(){
    return (
        <div className={"w-fit flex flex-row gap-2 items-center"}>
            <FaChevronLeft size={24}/>
            {
                Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
                    <div className={"p-2 text-center flex border text-white h-full items-center justify-center text-center aspect-square " + (i === 1 ? "border-background-contrast" : "border-background-pop hover:border-background-contrast duration-300 transition-colors") }>
                        {i}
                    </div>
                ))
            }
            <FaChevronRight size={24}/>
        </div>
    );
}

export default PagePagination;