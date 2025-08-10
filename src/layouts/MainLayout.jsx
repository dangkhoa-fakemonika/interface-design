import {Outlet} from "react-router";
import Header from "@/components/Header/Header.jsx";

function MainLayout(){
    return (
        <div className={"flex flex-col gap-2 bg-gradient-to-t from-background-light to-background w-screen h-screen overflow-hidden"}>
            <Header/>
            <div className={"w-full"}>
                <Outlet/>
            </div>
        </div>
    )
}

export default MainLayout;