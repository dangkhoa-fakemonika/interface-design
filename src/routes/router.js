import { createBrowserRouter } from "react-router";
import MainLayout from "@/layouts/MainLayout.jsx";
import MainPage from "@/pages/MainPage/MainPage.jsx";
import ChatbotPage from "@/pages/ChatbotPage/ChatbotPage.jsx";
import SearchAndFilter from "@/pages/SearchAndFilter/SearchAndFilter.jsx";
import SingleGamePage from "@/pages/SingleGamePage/SingleGamePage.jsx";

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
                Component : SingleGamePage
            },
            {
                path : "/ai",
                Component : ChatbotPage
            },
            {
                path : "/search",
                // Component : Search
            },
            {
                path : "/search-filters",
                Component : SearchAndFilter
            }
        ]
    }
]);

export default router;