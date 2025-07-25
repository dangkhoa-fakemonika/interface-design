import { createBrowserRouter } from "react-router";
import MainLayout from "@/layouts/MainLayout.jsx";
import MainPage from "@/pages/MainPage/MainPage.jsx";

const router = createBrowserRouter([
    {
        path : "/",
        Component : MainLayout,
        children : [
            {
                index : true,
                Component : MainPage
            },
            {
                path : "/game-page",
                // Component : SingleGamePage
            },
            {
                path : "/ai",
                // Component : ChatBot
            },
            {
                path : "/search",
                // Component : Search
            },
            {
                path : "/filters",
                // Component : Filters
            }
        ]
    }
]);

export default router;