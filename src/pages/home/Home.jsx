import About from "./About";
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
        </div>
    );
};

export default Home;