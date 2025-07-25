import {Outlet} from "react-router";
import Header from "@/components/Header.jsx";

function MainLayout(){
    return (
        <div className={"flex flex-col"}>
            <Header/>
            <Outlet/>
        </div>
    )
}

export default MainLayout;