import { Outlet } from "react-router-dom";
import Nav from "../../Pages/Nav/Nav";


const Mainlayout = () => {
    return (
        <div className="container mx-auto bg-[#FFFFFFF2]">
          <Nav></Nav>
        <Outlet></Outlet>
            
        </div>
    );
};

export default Mainlayout;