
import SocialLinks from "../SocialLinks";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Experience from "./Experience";
import Projects from "./Projects";


const Home = () => {
    return (
        <div>
            <Banner/>
            <SocialLinks/>
            <About/>
            <Projects/>
            <Experience/>
            <Contact/>
        </div>
    );
};

export default Home;