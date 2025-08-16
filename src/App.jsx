import {RouterProvider} from "react-router";
import router from "@/routes/router.js";
import {useMemo} from "react";

// console.log(import.meta.env.VITE_APP_DATA_URL);

function App() {
    useMemo(() => {
        document.documentElement.classList.add('dark');
    }, [])

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App

