import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import gsap from "gsap";
import { MotionPathPlugin, ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, SplitText)

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;