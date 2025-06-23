import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import gsap from "gsap";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <Footer />
            <Footer />
            <Footer />
            <Footer />
            <Footer />
        </div>
    );
};

export default Root;