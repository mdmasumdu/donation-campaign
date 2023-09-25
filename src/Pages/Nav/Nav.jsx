import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div className="flex flex-col justify-center md:flex-row p-5 items-center">
                <div className="flex-1">
                   <img src={'/Resources/Logo.png'} alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 gap-5 text-black font-semibold text-xl">
                    <NavLink to='/' className={({isActive})=>isActive ? 'text-red-400 underline': ''}>Home</NavLink>
                    <NavLink to="/donation" className={({isActive})=>isActive ? 'text-red-400 underline': ''}>Donation</NavLink>
                    <NavLink to="statistics" className={({isActive})=>isActive ? 'text-red-400 underline': ''}>Statistics</NavLink>
                    </ul>
            </div>
           </div>
            
        </div>
    );
};

export default Nav;