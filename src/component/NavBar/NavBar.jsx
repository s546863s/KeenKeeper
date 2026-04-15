import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineHistory } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className=" w-full fixed z-50">
      <div className="navbar bg-base-100 px-4 md:px-12 border-b border-gray-200 shadow-sm">
      {/* Navbar Start: Logo */}
      <div className="navbar-start">
        <a className="text-2xl font-bold text-[#1a432e] cursor-pointer">
          Keen<span className="text-[#1a432e]">Keeper</span>
        </a>
      </div>

      {/* Navbar End: Menu Items */}
      <div className="navbar-end gap-2">
        {/* Home Button (Active State) */}
       <NavLink to={'/'}>
         <button className="btn btn-sm md:btn-md bg-[#1a432e] hover:bg-[#143424] text-white border-none normal-case px-4">
          <HiOutlineHome className="text-lg mr-2" />
          Home
        </button>
       </NavLink>

        {/* Timeline Button */}
        <NavLink to={"/timeline"}>
            <button className="btn btn-ghost btn-sm md:btn-md text-gray-500 hover:text-[#1a432e] normal-case px-4">
          <MdOutlineHistory className="text-xl mr-2" />
          Timeline
        </button>
        </NavLink>

        {/* Stats Button */}
       
       <NavLink to={"/stats"}>
         <button className="btn btn-ghost btn-sm md:btn-md text-gray-500 hover:text-[#1a432e] normal-case px-4">
          <IoStatsChartOutline className="text-xl mr-2" />
          Stats
        </button>
       </NavLink>

      </div>
    </div>
        </nav>
    );
};

export default NavBar;