import Footer from "../component/Footer/Footer";
import HeroSection from "../component/HeroSection/HeroSection";
import NavBar from "../component/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const Layout = () => {
    const location = useLocation();
    useEffect(() => {
    const pageTitle = {
      "/": "Home - KeenKeeper",
      "/timeline": "Timeline - KeenKeeper",
      "/stats": "Statistics - KeenKeeper",
    };

    document.title = pageTitle[location.pathname] || "KeenKeeper";
  }, [location]);
    return (
        <div>
           <header className="relative">
         {/* Navbar section here */}
            <section >
                <NavBar ></NavBar>
            </section>
            {/* Hero section Started here */}
            <HeroSection></HeroSection>

           </header>

            {/* dynamic content here*/}
            

            <main className="min-h-52">
                <Outlet />
            </main>

            {/* Footer Section Here */}
        <Footer></Footer>


        </div>
    );
};

export default Layout;