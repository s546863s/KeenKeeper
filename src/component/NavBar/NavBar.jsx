import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineHistory } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    // Active Inactive 
    const activeClass = "flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a432e] text-white font-medium transition-all";
    const inactiveClass = "flex items-center gap-2 px-4 py-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-all";

    const navLinks = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                    <HiOutlineHome className="text-xl" />
                    <span>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/timeline" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                    <MdOutlineHistory className="text-xl" />
                    <span>Timeline</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/stats" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                    <IoStatsChartOutline className="text-xl" />
                    <span>Stats</span>
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 px-4 md:px-12 border-b border-gray-200 sticky top-0 z-50 shadow-sm">
            {/* Navbar Start:  */}
            <div className="navbar-start">
                <Link to="/" className="text-2xl font-bold text-[#1a432e] tracking-tight">
                    Keen<span className="text-[#1a432e]">Keeper</span>
                </Link>
            </div>

           

            {/* HamBargar menu */}
            <div className="navbar-end">
                

                <div className="dropdown dropdown-end"> 
                    <label tabIndex={0} className="btn btn-ghost lg:hidden p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-base-100 rounded-box w-64 gap-2 border border-gray-100">
                        {navLinks}
                    </ul>
                </div>

                
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;