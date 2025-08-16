import {Outlet} from "react-router";
import Header from "@/components/Header/Header.jsx";
import ChatbotWidget from "@/components/Chatbot/ChatbotWidget.jsx";
import {useState} from "react";
import SearchOverlay from "@/components/SearchOverlay/SearchOverlay.jsx";

function MainLayout(){
    const [overlay, setOverlay] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const changeSearchValue = (value) => {
        setSearchValue(value);
    }

    const searchOn = () => {
        setOverlay(true);
    }

    const searchOff = () => {
        setOverlay(false);
    }


    return (
        <div className={"flex flex-col dark:bg-gradient-to-t dark:from-background-light dark:to-background bg-background-alt w-screen h-screen overflow-hidden"}>
            <Header toggleOnSearch={searchOn} setSearchValue={changeSearchValue}/>
            <div className={"relative w-full flex flex-row grow overflow-hidden"}>
                <ChatbotWidget/>
                <Outlet/>
                {overlay ? <SearchOverlay searchValue={searchValue} closeOverlay={searchOff}/> : <div/>}
            </div>
        </div>
    )
}

export default MainLayout;