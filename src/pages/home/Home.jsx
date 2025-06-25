import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import TechStack from "./TechStack";


const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;