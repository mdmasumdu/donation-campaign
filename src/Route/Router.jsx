import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../assets/Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Details from "../Pages/Deatils/Details";

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
                loader:()=>fetch('/public/Data.json'),
                element:<Donation></Donation>
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            },
            {
                path:"/details/:id",
                loader:()=>fetch('/public/Data.json'),
                element:<Details></Details>
            }
        ]
    }
])



export default mycreatedrouter;