import Footer from "../component/Footer/Footer";

import NavBar from "../component/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";



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

// ডাটা সেভ করার জন্য স্টেট
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        // public ফোল্ডারে থাকা json ফাইল থেকে ডাটা ফেচ করা
        fetch('friends.json') 
            .then(res => res.json())
            .then(data => setFriends(data))
            
    }, []); 

    

    return (
        <div>
           <header className="relative">
         {/* Navbar section here */}
            <section >
                <NavBar ></NavBar>
            </section>
            {/* Hero section Started here */}
            

           </header>

            {/* dynamic content here*/}
            

            <main  className="max-w-5xl mx-auto">
                <Outlet />
            </main>

            {/* Footer Section Here */}
        <Footer></Footer>


        </div>
    );
};

export default Layout;