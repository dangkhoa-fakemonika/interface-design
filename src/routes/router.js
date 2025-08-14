import { createBrowserRouter } from "react-router";
import MainLayout from "@/layouts/MainLayout.jsx";
import MainPage from "@/pages/MainPage/MainPage.jsx";
import ChatbotPage from "@/pages/ChatbotPage/ChatbotPage.jsx";
import SearchAndFilter from "@/pages/SearchAndFilter/SearchAndFilter.jsx";
import SingleGamePage from "@/pages/SingleGamePage/SingleGamePage.jsx";
import CompareGames from "@/pages/CompareGames/CompareGames.jsx";
import PersonalizedPage from "@/pages/PersonalizedPage/PersonalizedPage.jsx";

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
                path : "/compare-games",
                Component : CompareGames
            },
            {
                path : "/search-filters",
                Component : SearchAndFilter
            },
            {
                path : "/personalized-page",
                Component: PersonalizedPage
            }
        ]
    }
]);

export default router;