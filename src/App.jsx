import {RouterProvider} from "react-router";
import router from "@/routes/router.js";

// console.log(import.meta.env.VITE_APP_DATA_URL);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

