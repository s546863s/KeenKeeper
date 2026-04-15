import Footer from "../component/Footer/Footer";
import HeroSection from "../component/HeroSection/HeroSection";
import NavBar from "../component/NavBar/NavBar";
import { Outlet } from "react-router-dom";


const Layout = () => {
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