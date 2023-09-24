import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../assets/Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

const mycreatedrouter =createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>
        ,
        children:[

            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/donation",
                element:<Donation></Donation>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            }
        ]
    }
])



export default mycreatedrouter;