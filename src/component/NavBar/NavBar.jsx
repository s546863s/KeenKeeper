import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineHistory } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    // active in active Style
    const activeClass = "btn btn-sm md:btn-md bg-[#1a432e] text-white border-none normal-case px-4 flex items-center";
    const inactiveClass = "btn btn-ghost btn-sm md:btn-md text-gray-500 hover:text-[#1a432e] normal-case px-4 flex items-center";

    return (
        <nav className="w-full  z-50">
            <div className="navbar bg-base-100 px-4 md:px-12 border-b border-gray-200 shadow-sm">
                <div className="navbar-start">
                    <a className="text-2xl font-bold text-[#1a432e] cursor-pointer">
                        Keen<span className="text-[#1a432e]">Keeper</span>
                    </a>
                </div>

                <div className="navbar-end gap-2">
                    {/* Home Link */}
                    <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                        <HiOutlineHome className="text-lg mr-2" />
                        Home
                    </NavLink>

                    {/* Timeline Link */}
                    <NavLink to="/timeline" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                        <MdOutlineHistory className="text-xl mr-2" />
                        Timeline
                    </NavLink>

                    {/* Stats Link */}
                    <NavLink to="/stats" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
                        <IoStatsChartOutline className="text-xl mr-2" />
                        Stats
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;