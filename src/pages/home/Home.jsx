import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import TechStack from "./TechStack";
import Test from "./Test";


const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <TechStack />
            <Test />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;